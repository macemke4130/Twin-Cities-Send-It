// Redirect if not logged in --
const token = "Fake JWT";
if (localStorage.getItem("Token") != token) {
    window.location.href = "/";
}

const params = window.location.search;
const paramsList = params.split("=");
const id = paramsList[1];

const gql = async (ask) => {
    let query = ask;

    let graphqlPath = "../graphql";
    let method = "POST";
    let headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
    let body = JSON.stringify({ query });
    let r = await fetch(graphqlPath, { method, headers, body });
    r = await r.json();
    return r.data;
}

const getHill = async (hillId) => {
    const r = await gql(`{hillInfo (id: ${hillId}) { id, name, description, maplink, mapembed, rating }}`);
    const hill = r.hillInfo;

    console.table(hill);

    document.getElementById('hillNameInput').value = hill.name;
    document.getElementById("ratingInput").value = hill.rating;
    document.getElementById('descriptionInput').innerText = hill.description;
    document.getElementById('mapLinkInput').value = hill.maplink;
    document.getElementById('mapembedInput').innerText = hill.mapembed;

    document.title = hill.name + " - TCSI";
}

const getVideo = async (hillId) => {
    const r = await gql(`{video (hill_id: ${hillId}){ src }}`);

    if (r.video === null) return;

    document.getElementById('videoInput').innerText = r.video.src;
}

const editHill = async () => {
    const hillName = document.getElementById("hillNameInput").value;
    const description = document.getElementById("descriptionInput").value;
    const added_by = 1; // Temporary Hard Code. Should get from login mutation --
    const rating = Number(document.getElementById("ratingInput").value);
    let mapembed = document.getElementById("mapembedInput").value;
    const mapLink = document.getElementById("mapLinkInput").value;
    let video = document.getElementById("videoInput").value;

    if (video.charAt(0) === "<") {
        // Format video iframe for database --
        video = video.split(`src="`)[1];
        video = video.split(`"`)[0];
    }

    if (mapembed.charAt(0) === "<") {
        // Format mapembed iframe for database --
        mapembed = mapembed.split(`src="`)[1];
        mapembed = mapembed.split(`"`)[0];
    }

    try {
        const r = await gql(`mutation { newHill(name: "${hillName}", description: "${description}", added_by: ${added_by}, rating: ${rating}, maplink: "${mapLink}", mapembed: "${mapembed}") { insertId } }`);
        if (video) editVideo(r.newHill.insertId, video);

        window.open("../details.html?id=" + r.newHill.insertId);
        window.location.href = "./panel.html";
    } catch (e) {
        console.error(e);
    }
}

const editVideo = async (insertId, src) => {
    try {
        const r = await gql(`mutation { newVideo(hill_id: ${insertId}, src: "${src}") { insertId } }`);
        console.log(r.newVideo.insertId);
    } catch (e) {
        console.error(0);
    }
}

getHill(id);
getVideo(id);