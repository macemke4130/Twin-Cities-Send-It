import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema, root } from "./graphql.js";
import * as path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

var app = express();
app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.use(express.static('./public'));

// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');

// This file requires Type: Module in the Package.json --