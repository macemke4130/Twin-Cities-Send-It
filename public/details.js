console.log("Created by Lucas Mace");
console.log("lucasmace4130@gmail.com");

import { gql } from "./utils.js";

const params = window.location.search;
const paramsList = params.split("=");
const id = paramsList[1];

let hill;
let photos;
const getHill = async (hillId) => {
    const r = await gql(`{hillInfo (id: ${hillId}){ name, description, maplink, mapembed, rating, video} photos (hill_id: ${hillId}) { filename }}`);
    
    if (r.photos.length >= 1) {
        photos = r.photos;
        loadPhotos();
    } else {
        console.log("No Photos.");
    }

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

    if (hill.video === null) {
        const vDiv = document.getElementById('video-section');
        vDiv.remove();
        return
    }
    document.getElementById('video').src = hill.video;
}

const loadPhotos = () => {
    const rootPath = "./img/hillphotos/";
    const photoDiv = document.getElementById('photo-section');

    for (let i = 0; i < photos.length; i++) {
        const pic = document.createElement('img');
        pic.src = rootPath + photos[i].filename;
        pic.className = "detail-photo";

        photoDiv.appendChild(pic);
    }
}

getHill(id);