import { gql, auth } from "../utils.js";

// Redirect if not logged in --
auth();

const allPhotosDiv = document.getElementById("allPhotos");

const getAllPhotos = async () => {
    const r = await gql(`{ allPhotos { id, hill_id, filename }}`, "admin");
    const allPhotos = r.allPhotos;

    for (let i = 0; i < allPhotos.length; i++) {
        // Create Image Element --
        let img = document.createElement("img");
        img.src = "../img/hillphotos/" + allPhotos[i].filename;
        img.className = "admin-photo-list";

        // Create Image Container Div --
        let photoDiv = document.createElement("div");
        
        if(i % 2 === 0) {
            photoDiv.className = "admin-hill-div";
        } else {
            photoDiv.className = "admin-hill-div grey-bg";
        }

        photoDiv.appendChild(img);

        // Modify Dom --
        allPhotosDiv.appendChild(photoDiv);
    }
}

getAllPhotos();