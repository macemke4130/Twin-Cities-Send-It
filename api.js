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
          { expiresIn: '1h' });
          console.log(token);
        res.json(token);
    } catch (e) {
        console.log(e);
    }
});

export default router;