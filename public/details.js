console.log("Created by Lucas Mace");
console.log("lucasmace4130@gmail.com");

const params = window.location.search;
const paramsList = params.split("=");
const id = paramsList[1];

const gql = async (ask) => {
    let query = ask;

    let graphqlPath = "./graphql";
    let method = "POST";
    let headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
    let body = JSON.stringify({ query });
    let r = await fetch(graphqlPath, { method, headers, body });
    r = await r.json();
    return r.data;
}

let hill;
const getHill = async (hillId) => {
    const r = await gql(`{hillInfo (id: ${hillId}) { id, name, description, maplink, mapembed, gps, rating }}`);
    hill = r.hillInfo;

    let rating;
    switch (hill.rating) {
        case 1:
            rating = "Beginner"
            break;
        case 2:
            rating = "Intermediate"
            break;
        case 3:
            rating = "Advanced"
            break;
        default:
            rating = "Not Yet Rated"
            break;
    }

    document.getElementById('hillName').innerHTML = hill.name;
    document.getElementById('description').innerHTML = hill.description;
    document.getElementById('mapLink').href = hill.maplink;
    document.getElementById('rating').innerHTML = rating;
    document.getElementById('map').src = hill.mapembed;

    document.title = hill.name + " - TCSI";
}

const getPhotos = async (hillId) => {
    const r = await gql(`{photos (hill_id: ${hillId}){ filename }}`);

    if (r.photos.length === 0) return;

    const rootPath = "./img/hillphotos/";
    const photoDiv = document.getElementById('photo-section');

    for (let i = 0; i < r.photos.length; i++) {
        const pic = document.createElement('img');
        pic.src = rootPath + r.photos[i].filename;
        pic.className = "detail-photo";

       photoDiv.appendChild(pic);
    }
}

const getVideo = async (hillId) => {
    const r = await gql(`{video (hill_id: ${hillId}){ src }}`);
    
    if (r.video === null) {
        const vDiv = document.getElementById('video-section');
        vDiv.remove();
        return;
    }

    const video = document.getElementById('video');
    video.src = r.video.src;
}

const goBack = () => {
  window.history.back();
}

getHill(id);
getPhotos(id);
getVideo(id);