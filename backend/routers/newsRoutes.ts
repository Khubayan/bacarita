// @ts-nocheck
// This directive is used to bypass TypeScript checking.
// We're ignoring the requirement for an argument in the controller because Express handles it automatically.

import {Router} from 'express';

import {
  getAllNews,
  getNewsByTag,
  getSearchNews,
} from '../controllers/newsController';
import {verifyToken} from '../middlewares/verifyToken';

const router = Router();

router.use(verifyToken);

router.route('/').get(getAllNews);
router.route('/search').get(getSearchNews);
router.route('/tags').get(getNewsByTag);

export default router;
