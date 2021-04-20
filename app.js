const gql = async (ask) => {
    let query = ask;

    let graphqlPath = "http://localhost:4000/graphql";
    let method = "POST";
    let headers = { 'Content-Type': 'application/json', 'Accept': 'application/json', };
    let body = JSON.stringify({ query });
    let r = await fetch(graphqlPath, { method, headers, body });
    r = await r.json();
    return r.data;
}

const getHill = async () => {
    const r = await gql(`{hillInfo (id: 5) { name, description, maplink, gps }}`);
    console.log(r);
}

getHill();

// Params?