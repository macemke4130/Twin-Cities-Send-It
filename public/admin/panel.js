// Redirect if not logged in --
const token = "Fake JWT";
if (localStorage.getItem("Token") != token) {
    window.location.href = "/";
}

import { gql } from "../utils.js";

const getAllHills = async () => {
    // Fetch All Hills Data --
    const r = await gql(`{allHills { id, name }}`, "admin");
    const allHills = r.allHills;

    // Input Source for DOM Manipulation --
    const div = document.getElementById('allSends');

    // Loop through all Hills --
    for (let i = 0; i < allHills.length; i++) {
        // Create Container Div --
        let hillDiv = document.createElement('div');
        hillDiv.className = "admin-hill-div";

        if (i % 2 === 0) hillDiv.className = "admin-hill-div grey-bg";

        // Create Link --
        let newLink = document.createElement('a');
        newLink.href = "./edit.html?id=" + allHills[i].id;
        newLink.className = "hill-link";

        // Create Hill Title Text --
        let newSpan = document.createElement('span');
        let newText = document.createTextNode(allHills[i].name);
        newSpan.className = "edit-hill";
        newSpan.appendChild(newText);

        // Create Edit Button --
        let newBtn = document.createElement('button');
        newBtn.innerText = "Edit";

        // Create View Live Button --

        // Modify DOM --
        hillDiv.appendChild(newLink);
        hillDiv.appendChild(newBtn);
        newLink.appendChild(newSpan);
        
        div.appendChild(hillDiv);
    }
}

// Run --
getAllHills();