import { gql, apiService } from "../utils.js";

const admin = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const r = await gql(`{user (name: "${username}", password: "${password}") {name}}`, "admin");
        console.log(r);
        if (r.user.name === username) {
            // Success
            const bodyObject = {
                name: username
            };
            const jwt = await apiService("/jwt", "POST", bodyObject);
            console.log(jwt);
            if (jwt) {
                localStorage.setItem("Token", jwt);
                window.location.href = "./panel.html";
            }
        }
    } catch (e) {
        console.error("Unsuccessful Login \n" + e);
    };
}

document.getElementById("submit").onclick = admin;