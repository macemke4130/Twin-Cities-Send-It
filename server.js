import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema, root } from "./graphql.js";

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');