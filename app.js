let query = `{hello}`;

let graphqlPath = "http://localhost:4000/graphql";
let method = "POST";
let headers = {'Content-Type': 'application/json', 'Accept': 'application/json',};
let body = JSON.stringify({ query });

const gql = async () => {
    let r = await fetch(graphqlPath, { method, headers, body});
    r = await r.json();
    console.log(r.data.hello);
}

gql();