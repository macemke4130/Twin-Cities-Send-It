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

const upload = async (e) => { 
    e.preventDefault();
    const newPhoto = e.srcElement.childNodes[1].files[0];
    const hillId = document.getElementById("hillId").value;

    const data = new FormData();
    data.append("img", newPhoto);

    const req = await fetch("/upload", {
        method: "POST",
        headers: { },
        body: data
    });

    const file = await req.json();

    const r = await gql(`mutation { newPhoto(hill_id: ${hillId}, filename: "${file.filename}") { insertId } }`);
    console.log(r.newPhoto.insertId);
}

const form = document.getElementById('photoUpload');
form.addEventListener('submit', upload);