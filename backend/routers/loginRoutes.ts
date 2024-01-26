import {Router} from 'express';
import {getHelloWorld, postLogin} from '../controllers/loginControllers';
import {verifyToken} from '../middlewares/verifyToken';

const router = Router();

router.route('/').post(postLogin);
// @ts-ignore // This line ignores the fact that verifyToken requires arguments, but Express automatically passes them.
router.use(verifyToken);
// These endpoints below require authentication to access.
router.route('/hi').get(getHelloWorld);
export default router;
