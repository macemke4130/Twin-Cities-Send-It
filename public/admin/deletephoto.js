import { gql } from "../utils.js";

const id = Number(window.location.search.split("photoid=")[1]);

const deletePhoto = async () => {
    const r = await gql(` mutation { deletePhoto (id: ${id}) { affectedRows } } `, "admin");
    if (r) window.location.href = "./allphotos.html";
}

deletePhoto();