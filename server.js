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

app.listen(process.env.PORT || 4000);