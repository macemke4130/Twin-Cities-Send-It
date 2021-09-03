import { buildSchema } from 'graphql';
import { query } from "./dbconnect.js";

export const schema = buildSchema(`
  type Query {
      hillInfo (id: Int!): Hill
      allHills (admin: Boolean): [Hill]
      photos (hill_id: Int!): [Photos]
      allPhotos(admin: Boolean): [Photos]
      user (name: String!, password: String!): User
      mood: String
  }

  type Mutation {
      newHill(name: String!, description: String!, added_by: Int!, maplink: String!, mapembed: String!, rating: Int!, video: String): mysqlResponse
      editHill(id: Int!, name: String!, is_active: Int!, description: String!, added_by: Int!, maplink: String!, mapembed: String!, rating: Int!, video: String): mysqlResponse
      deleteHill(id: Int!): mysqlResponse
      newPhoto(hill_id: Int!, filename: String!): mysqlResponse
      deletePhoto(id: Int!): mysqlResponse
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
      is_active: Int
      name: String
      description: String
      added_by: Int
      maplink: String
      mapembed: String
      gps: String
      rating: Int
      video: String
  }

  type Photos {
      id: Int
      hill_id: Int
      filename: String
      name: String
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
        if (args.admin === true) {
            // Used for admin panel to see unactive hills --
            const r = await query("select * from hills order by is_active desc");
            return r;
        }
        const r = await query("select * from hills where is_active = 1 order by id desc");
        return r;
    },
    photos: async (args, req) => {
        const r = await query("select * from photos where hill_id = ?", [args.hill_id]);
        return r;
    },
    allPhotos: async (args, req) => {
        const r = args.admin ? 
        await query("select photos.id, photos.hill_id, photos.filename, hills.name from photos join hills on photos.hill_id = hills.id order by hill_id") :
        await query("select * from photos order by hill_id");
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
    mood: () => {
        return "Feeling Sendy"
    },
    // Mutations --
    newHill: async (args) => {
        const r = await query("insert into hills set ?", [args]);
        return r;
    },
    editHill: async (args) => {
        const r = await query("update hills set ? where id = ?", [args, args.id]);
        return r;
    },
    deleteHill: async (args) => {
        const r = await query("update hills set is_active = 0 where id = ?", [args.id]);
        return r;
    },
    newPhoto: async (args) => {
        const r = await query("insert into photos set ?", [args]);
        return r;
    },
    deletePhoto: async (args) => {
        const r = await query("delete from photos where id = ?", [args.id]);
        return r;
    }
};

export default {
    schema,
    root
}