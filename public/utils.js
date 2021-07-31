export const gql = async (ask, path = 0) => {
    let query = ask;
    let method = "POST";
    let headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
    let body = JSON.stringify({ query });
    let graphqlPath = "./graphql";

    if (path === 1) graphqlPath = "../graphql";

    try {
        let r = await fetch(graphqlPath, { method, headers, body });
        r = await r.json();
        return r.data;
    } catch (e) {
        console.error(e);
    }
}