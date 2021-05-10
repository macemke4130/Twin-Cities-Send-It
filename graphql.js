import { buildSchema } from 'graphql';
import { query } from "./dbconnect.js";

export const schema = buildSchema(`
  type Query {
      hillInfo (id: Int!): Hill
      allHills: [Hill]
      photos (hill_id: Int!): [Photos]
      allPhotos: [Photos]
      video (hill_id: Int!): Video
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
`);

export const root = {
    hillInfo: async (args, req) => {
        const r = await query("select * from hills where id = ?", [args.id]);
        return r[0];
    },
    allHills: async (args, req) => {
        const r = await query("select * from hills");
        return r;
    },
    photos: async (args, req) => {
        const r = await query("select * from photos where hill_id = ?", [args.hill_id]);
        return r;
    },
    allPhotos: async(args, req) => {
        const r = await query("select * from photos order by hill_id");
        return r;
    },
    video: async (args, req) => {
        const r = await query("select * from videos where hill_id = ?", [args.hill_id]);
        return r[0];
    }
};

export default {
    schema,
    root
}