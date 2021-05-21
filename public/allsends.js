console.log("Created by Lucas Mace");
console.log("lucasmace4130@gmail.com");

const gql = async (ask) => {
    let query = ask;

    let graphqlPath = "./graphql";
    let method = "POST";
    let headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
    let body = JSON.stringify({ query });
    let r = await fetch(graphqlPath, { method, headers, body });
    r = await r.json();
    return r.data;
}

let allPhotos = [];
const getAllPhotos = async () => {
    // Fetches array of every photo in database --
    // Many hills have multiple photos --
    const r = await gql(`{allPhotos { hill_id, filename }}`);
    allPhotos = r.allPhotos;

    // Find Duplicate hill photos --
    for (let i = 0; i < allPhotos.length - 1; i++) {
        let x = allPhotos[i].hill_id;

        if (allPhotos[i + 1].hill_id === x) {
            // Next photo is of the same hill, set current [i] entry to null --
            allPhotos[i] = null;
        }
    }

    // Remove null array indexes --
    allPhotos = allPhotos.filter(pic => pic != null);

    // Call next fetch request --
    getAllHills();
}

const getAllHills = async () => {
    // Fetch All Hills Data --
    const r = await gql(`{allHills { id, name }}`);
    const allHills = r.allHills;

    // Input Source for DOM Manipulation --
    const div = document.getElementById('allSends');

    // Loop through all Hills --
    for (let i = 0; i < allHills.length; i++) {
        // Create Container Div --
        let hillDiv = document.createElement('div');
        hillDiv.className = "hill-div";

        // Create Link --
        let newLink = document.createElement('a');
        newLink.href = "/details.html?id=" + allHills[i].id;
        newLink.className = "hill-link";

        // Create Hill Title Text --
        let newSpan = document.createElement('span');
        let newText = document.createTextNode(allHills[i].name);
        newSpan.className = "hill-name";
        newSpan.appendChild(newText);

        // Create Photo --
        let newPic = document.createElement('img');
        newPic.src = "./img/hillphotos/" + findPhoto(allHills[i].id);
        newPic.className = "all-hills-photo";

        // Modify DOM --
        hillDiv.appendChild(newLink);
        newLink.appendChild(newSpan);
        newLink.appendChild(newPic);

        div.appendChild(hillDiv);
    }

}

// Finds correct photo for each hill's ID --
const findPhoto = (hill_id) => {
    for (let i = 0; i < allPhotos.length; i++) {
        if (allPhotos[i].hill_id === hill_id) {
            return allPhotos[i].filename;
        }
    }
    // If no photo exists for this hill yet, submit FPO image --
    return "blank.jpg";
}

// Run --
getAllPhotos();