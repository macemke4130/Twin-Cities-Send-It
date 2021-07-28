const upload = async (e) => { 
    e.preventDefault();
    const newPhoto = e.srcElement.childNodes[1].files[0];
    console.log(newPhoto);

    const data = new FormData();
    data.append("img", newPhoto);

    const req = await fetch("/upload", {
        method: "POST",
        headers: { },
        body: data
    });

    const res = await req.json();

    console.log(res);
}

const form = document.getElementById('photoUpload');
form.addEventListener('submit', upload);