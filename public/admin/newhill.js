// Redirect if not logged in --
const token = "Fake JWT";
if (localStorage.getItem("Token") != token) {
    window.location.href = "/";
}

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

const submitNewHill = async () => {
    const hillName = document.getElementById("hillName").value;
    const description = document.getElementById("description").value;
    const added_by = 1; // Temporary Hard Code. Should get from login mutation --
    const rating = Number(document.getElementById("rating").value);
    const mapembed = document.getElementById("mapembed").value;
    const maplink = document.getElementById("maplink").value;

    const r = await gql(`mutation { newHill(name: "${hillName}", description: "${description}", added_by: ${added_by}, rating: ${rating}, maplink: "${maplink}", mapembed: "${mapembed}") { insertId } }`);
    console.log(r.newHill);
}