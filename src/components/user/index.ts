import * as express from 'express';

import {validateToken} from './../../middleware/validateToken';

import authComponent from './auth';
import myprofileComponent from './myprofile';
import postComponent from './post';
const router = express.Router();

router.use("/auth", authComponent);
router.use("/myprofile", validateToken,myprofileComponent);
router.use("/post", validateToken,postComponent);

export default router;