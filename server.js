import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';
import { query } from "./dbconnect.js";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
      hillInfo (id: Int!): Hill
  }

  type Hill {
      id: Int
      name: String
      description: String
      added_by: Int
      maplink: String
      gps: String
      rating: Int
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hillInfo: async (args, req) => {
        const r = await query("select * from hills where id = ?", [args.id]);
        return r[0];
    }
    // allHillNames --
};

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');