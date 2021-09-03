import { gql, auth } from "../utils.js";

// Redirect if not logged in --
auth();

const allPhotosDiv = document.getElementById("allPhotos");
let hillNames;

const getAllPhotos = async () => {
    const r = await gql(`{ allPhotos (admin: true) { id, hill_id, filename, name }}`, "admin");
    const allPhotos = r.allPhotos;

    for (let i = 0; i < allPhotos.length; i++) {
        // Create Image Container Div --
        let photoDiv = document.createElement("div");

        if (i % 2 === 0) {
            photoDiv.className = "admin-hill-div";
        } else {
            photoDiv.className = "admin-hill-div grey-bg";
        }

        // Create Image Element --
        let img = document.createElement("img");
        img.src = "../img/hillphotos/" + allPhotos[i].filename;
        img.className = "admin-photo-list";
        photoDiv.appendChild(img);

        // Create Hill Title Text --
        let hill = document.createElement("span");
        hill.innerText = allPhotos[i].name;
        photoDiv.appendChild(hill);

        // Create Delete Link --
        let deletePhoto = document.createElement("a");
        deletePhoto.innerText = "Delete Photo";
        deletePhoto.href = "./deletephoto.html?photoid=" + allPhotos[i].id;
        photoDiv.appendChild(deletePhoto);

        // Modify Dom --
        allPhotosDiv.appendChild(photoDiv);
    }
}

getAllPhotos();