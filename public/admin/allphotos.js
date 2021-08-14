import { gql, auth } from "../utils.js";

// Redirect if not logged in --
auth();

const allPhotosDiv = document.getElementById("allPhotos");
let hillNames;

const getAllPhotos = async () => {
    const r1 = await gql(`{allHills (admin: true) { id, name }}`, "admin");
    hillNames = r1.allHills;

    const r2 = await gql(`{ allPhotos { id, hill_id, filename }}`, "admin");
    const allPhotos = r2.allPhotos;

    for (let i = 0; i < allPhotos.length; i++) {
        // Create Image Element --
        let img = document.createElement("img");
        img.src = "../img/hillphotos/" + allPhotos[i].filename;
        img.className = "admin-photo-list";

        // Create Image Container Div --
        let photoDiv = document.createElement("div");

        if (i % 2 === 0) {
            photoDiv.className = "admin-hill-div";
        } else {
            photoDiv.className = "admin-hill-div grey-bg";
        }

        // Create Hill Title Text --
        let hill = document.createElement("span");
        for (let i = 0; i < hillNames.length; i++) {
            if (hillNames[i].id === allPhotos[i].hill_id) {
                hill.innerText = hillNames[i].name;
            }
        }


        // Modify Dom --
        photoDiv.appendChild(img);
        photoDiv.appendChild(hill);
        allPhotosDiv.appendChild(photoDiv);
    }
}

getAllPhotos();
