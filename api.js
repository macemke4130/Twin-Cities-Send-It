import * as express from 'express';
import { SignJWT } from 'jose/jwt/sign';

const router = express.Router();

router.post('/jwt', async (req, res) => {
    try {
        res.json("Fake JWT");
    } catch (e) {
        console.log(e);
    }
});

export default router;