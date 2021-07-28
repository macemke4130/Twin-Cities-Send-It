import { buildSchema } from 'graphql';
import { query } from "./dbconnect.js";

export const schema = buildSchema(`
  type Query {
      hillInfo (id: Int!): Hill
      allHills: [Hill]
      photos (hill_id: Int!): [Photos]
      allPhotos: [Photos]
      video (hill_id: Int!): Video
      user (name: String!, password: String!): User
  }

  type Mutation {
      newHill(name: String!, description: String!, added_by: Int!, maplink: String!, mapembed: String!, rating: Int!): mysqlResponse
      newVideo(hill_id: Int!, src: String!): mysqlResponse
      newPhoto(hill_id: Int!, filename: String!): mysqlResponse
  }

  type mysqlResponse {
      fieldCount: Int
      afffieldCount: Int
      affectedRows: Int
      insertId: Int
      serverStatus: Int
      warningCount: Int
      message: String
      protocol41: Boolean
      changedRows: Int
  }

  type Hill {
      id: Int
      name: String
      description: String
      added_by: Int
      maplink: String
      mapembed: String
      gps: String
      rating: Int
  }

  type Photos {
      id: Int
      hill_id: Int
      filename: String
  }

  type Video {
    id: Int
    hill_id: Int
    src: String
}

  type User {
    id: Int
    name: String
    password: String
    login: Boolean
}

`);

export const root = {
    hillInfo: async (args, req) => {
        const r = await query("select * from hills where id = ?", [args.id]);
        return r[0];
    },
    allHills: async (args, req) => {
        const r = await query("select * from hills order by id desc");
        return r;
    },
    photos: async (args, req) => {
        const r = await query("select * from photos where hill_id = ?", [args.hill_id]);
        return r;
    },
    allPhotos: async (args, req) => {
        const r = await query("select * from photos order by hill_id");
        return r;
    },
    video: async (args, req) => {
        const r = await query("select * from videos where hill_id = ?", [args.hill_id]);
        return r[0];
    },
    user: async (args, req) => {
        // Authentication --
        const r = await query("select * from users where name = ?", [args.name]);
        const inputPassword = args.password;

        // Needs encryption --
        const dbPassword = r[0].password;


        if (inputPassword === dbPassword) {
            // Success --
            return r[0];
        } else {
            // Denied --
            return null;
        }
    },
    // Mutations --
    newHill: async (args) => {
        const r = await query("insert into hills set ?", [args]);
        return r;
    },
    newVideo: async (args) => {
        const r = await query("insert into videos set ?", [args]);
        return r;
    },
    newPhoto: async (args) => {
        const r = await query("insert into photos set ?", [args]);
        return r;
    }
};

export default {
    schema,
    root
}