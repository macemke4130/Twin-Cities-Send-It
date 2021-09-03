import { gql, auth, logOut } from "../utils.js";

// Redirect if not logged in --
auth();

const getAllHills = async () => {
    // Fetch All Hills Data --
    const r = await gql(`{allHills (admin: true) { id, name, is_active }}`, "admin");
    const allHills = r.allHills;

    // Input Source for DOM Manipulation --
    const allSendsDiv = document.getElementById('allSends');

    // Loop through all Hills --
    for (let i = 0; i < allHills.length; i++) {
        // Create Container Div --
        let hillDiv = document.createElement('div');

        // Alternate background color --
        if (i % 2 === 0) {
            hillDiv.className = "admin-hill-div grey-bg";
        } else {
            hillDiv.className = "admin-hill-div";
        }

        // Create Hill Title Text --
        let hillTitle = document.createElement('span');
        hillTitle.innerText = allHills[i].name;

        switch (allHills[i].is_active) {
            case 1:
                hillTitle.className = "edit-hill"
                break;
            case 0:
                hillTitle.className = "inactive-hill edit-hill"
                hillTitle.innerText = hillTitle.innerText + " - Inactive";
                break;
        }

        // Create Controls Div --
        let controlDiv = document.createElement('div');
        controlDiv.className = "controls";

        // Create Edit Button --
        let editBtn = document.createElement('button');
        editBtn.innerText = "Edit";

        // Create Edit Link --
        let editLink = document.createElement('a');
        editLink.href = "./edit.html?id=" + allHills[i].id;
        editLink.appendChild(editBtn);

        // Create View Live Button --
        let liveBtn = document.createElement('button');
        liveBtn.innerText = "View Live";

        // Create Live View Link --
        let liveLink = document.createElement('a');
        liveLink.href = "../details.html?id=" + allHills[i].id;
        liveLink.target = "_blank"
        liveLink.appendChild(liveBtn);

        // Modify DOM --
        hillDiv.appendChild(hillTitle);
        hillDiv.appendChild(controlDiv);
        controlDiv.appendChild(editLink);
        controlDiv.appendChild(liveLink);
        allSendsDiv.appendChild(hillDiv);
    }
}

getAllHills();

document.getElementById("logout").onclick = logOut;