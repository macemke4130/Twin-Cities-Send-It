import { gql, auth } from "../utils.js";

// Redirect if not logged in --
auth();

const submitNewHill = async () => {
    const is_active = Number(document.getElementById("is_active").value);
    const hillName = document.getElementById("hillNameInput").value;
    const description = document.getElementById("descriptionInput").value;
    const added_by = 1; // Temporary Hard Code. Should get from login mutation --
    const rating = Number(document.getElementById("ratingInput").value);
    let mapembed = document.getElementById("mapembedInput").value;
    const mapLink = document.getElementById("mapLinkInput").value;
    let video = document.getElementById("videoInput").value;

    // Should write conditional statement for
    // the following format operations in
    // case user inputs just the source string --

    // Format mapembed iframe for database --
    mapembed = mapembed.split(`src="`)[1];
    mapembed = mapembed.split(`"`)[0];

    // Format video iframe for database --
    video = video.split(`src="`)[1];
    video = video.split(`"`)[0];

    try {
        const r = await gql(`mutation { newHill(name: "${hillName}", description: "${description}", added_by: ${added_by}, rating: ${rating}, maplink: "${mapLink}", mapembed: "${mapembed}", video: "${video}") { insertId } }`, "admin");
        if (r) {
            window.open("../details.html?id=" + r.newHill.insertId);
            window.location.href = "./panel.html";
        }
    } catch (e) {
        console.error(e);
    }
}

document.getElementById("submitNew").onclick = submitNewHill;