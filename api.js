import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import config from './config/index.js';

const router = express.Router();
const privateKey = config.keys.jwt;

router.post('/jwt', async (req, res) => {
    const username = req.body.name;
    try {
        const token = await jwt.default.sign({
            data: username
        }, privateKey,
            { expiresIn: '60s' });
        console.log(token);
        res.json(token);
    } catch (e) {
        console.log(e);
    }
});

router.post('/auth', async (req, res) => {
    try {
        const token = req.body.token;
        const auth = await jwt.default.verify(token, privateKey, function(err, decoded) {
            if (err) {
                res.json({data: err.message});
                return;
            } else {
                res.json({data: decoded.name});
            }
        });
    } catch (e) {
        console.log(e);
    }
});

export default router;