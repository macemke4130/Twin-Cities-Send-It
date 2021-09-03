import { gql, auth, logOut } from "../utils.js";

// Redirect if not logged in --
auth();

const params = window.location.search;
const paramsList = params.split("=");
const id = paramsList[1];

const getHill = async (hillId) => {
    const r = await gql(`{hillInfo (id: ${hillId}) { id, is_active, name, description, maplink, mapembed, rating, video }}`, "admin");
    const hill = r.hillInfo;

    console.table(hill);

    document.getElementById("is_active").value = hill.is_active;
    document.getElementById("hillNameInput").value = hill.name;
    document.getElementById("ratingInput").value = hill.rating;
    document.getElementById("descriptionInput").innerText = hill.description;
    document.getElementById("mapLinkInput").value = hill.maplink;
    document.getElementById("mapembedInput").innerText = hill.mapembed;
    document.getElementById("videoInput").innerText = hill.video;

    document.title = hill.name + " - TCSI";
}

const editHill = async () => {
    const is_active = Number(document.getElementById("is_active").value);
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
        auth();
        const r = await gql(`mutation { editHill(id: ${id}, is_active: ${is_active} name: "${hillName}", description: "${description}", added_by: ${added_by}, rating: ${rating}, maplink: "${mapLink}", mapembed: "${mapembed}", video: "${video}") { changedRows } }`, "admin");
        console.log(r);
        window.open("../details.html?id=" + id);
        window.location.href = "./panel.html";
    } catch (e) {
        console.error(e);
    }
}

const deleteHill = async () => {
    try {
        const r = await gql(`mutation { deleteHill(id: ${id}) { affectedRows } }`, "admin");
        if (r) window.location.href = "./panel.html";
    } catch (e) {
        console.error(e);
    }
}

const bg = document.getElementById("alert-container");
const alertMessage = document.getElementById("alert-message");
const deleteConfirm = () => {
    window.scrollTo(0, 0);
    bg.style.display = "flex";
    alertMessage.innerText = "Delete Hill?";
}

const clearModal = () => {
    bg.style.display = "none";
}

document.getElementById("editHill").onclick = editHill;
document.getElementById("deleteHill").onclick = deleteConfirm;
document.getElementById("confirmDelete").onclick = deleteHill;
document.getElementById("denyDelete").onclick = clearModal;
document.getElementById("logout").onclick = logOut;

getHill(id);