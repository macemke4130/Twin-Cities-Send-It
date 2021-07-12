import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema, root } from "./graphql.js";
import * as path from 'path';
import routes from './api.js';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

var app = express();
app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.use(routes);

app.use(express.static('./public'));

app.listen(process.env.PORT || 4000);
console.log("... feeling sendy ...");