import { buildSchema } from 'graphql';
import { query } from "./dbconnect.js";

export let schema = buildSchema(`
  type Query {
      hillInfo (id: Int!): Hill
      allHills: [Hill]
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

export let root = {
    hillInfo: async (args, req) => {
        const r = await query("select * from hills where id = ?", [args.id]);
        return r[0];
    },
    allHills: async (args, req) => {
        const r = await query("select * from hills");
        return r;
    },
};

export default {
    schema,
    root
}