const apiService = async (uri, method = "GET", body) => {
    const headers = {};
    const options = {
        method,
        headers
    };

    if (method === "POST" || method === "PUT") {
        headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    try {
        const res = await fetch(uri, options);

        if (res.status === 404) {
            throw new Error("Check URI and Server Path.");
        }

        if (res.status === 401) {
            localStorage.removeItem('token');
            localStorage.setItem('isAuth', 'false');
            throw new Error("Check Local Storage or Server Endpoint.");
        }

        if (res.status === 500) {
            throw new Error("Check Server Terminal.");
        }

        if (res.ok) {
            return await res.json();
        }
    } catch (e) {
        console.error(e);
    }
};

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

const admin = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const r = await gql(`{user (name: "${username}", password: "${password}") {name}}`);

        if (r.user.name === username) {
            console.log("Success");
            const bodyObject = {
                name: username
            };
            const jwt = await apiService("/jwt", "POST", bodyObject);
            if (jwt) {
                localStorage.setItem("Token", jwt);
                window.location.href = "./panel.html";
            }
        }
    } catch (e) {
        console.error("Unsuccessful Login \n" + e);
    };
}