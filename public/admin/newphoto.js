import { gql, auth, logOut } from "../utils.js";

// Redirect if not logged in --
auth();

const getAllHills = async () => {
    // Grabs list of all active and inactive hills and populates select list --
    const r = await gql(`{allHills { id, name }}`, "admin");
    const allHills = r.allHills;

    const select = document.getElementById("hillId");

    for (let i = 0; i < allHills.length; i++) {
        let hill = document.createElement("option");
        hill.value = allHills[i].id;
        hill.innerHTML = allHills[i].name;
        select.appendChild(hill);
    }
}

const upload = async (e) => {
    // Prevents form submission refresh --
    e.preventDefault();

    // Selected file and assigned hill --
    const newPhoto = e.srcElement.childNodes[1].files[0];
    const hillId = Number(document.getElementById("hillId").value);

    // Validation --
    if (hillId === 0 || newPhoto === undefined) {
        alert("All fields required.");
        return;
    }

    // Preparing the photo for upload --
    const data = new FormData();
    data.append("img", newPhoto);

    // Upload API endpoint push --
    const req = await fetch("/upload", {
        method: "POST",
        headers: {},
        body: data
    });

    // Response from server with file info --
    const file = await req.json();

    try {
        const r = await gql(`mutation { newPhoto(hill_id: ${hillId}, filename: "${file.filename}") { insertId } }`, "admin");
        if (r) {
            alert("New photo uploaded to " + file.path);
            // window.location.href = "./panel.html";
        }
    } catch (e) {
        console.error(e);
    }
}

const form = document.getElementById('photoUpload');
form.addEventListener('submit', upload);
getAllHills();

document.getElementById("logout").onclick = logOut;