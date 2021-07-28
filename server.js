import express from 'express';
import multer from 'multer';
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

// Photo Uploader Logic --
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/hillphotos')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
});

const upload = multer({ storage: storage });

// Photo Upload Route --
app.post('/upload', upload.single('img'), (req, res) => {
    try {
        res.send(req.file);
    } catch (e) {
        console.error(e);
    }
});

app.listen(process.env.PORT || 4000);
console.log("... feeling sendy ...");