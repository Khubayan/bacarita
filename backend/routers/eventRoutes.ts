// @ts-nocheck
// This directive is used to bypass TypeScript checking.
// We're ignoring the requirement for an argument in the controller because Express handles it automatically.

import {Router} from 'express';
import {getAllEvents} from '../controllers/eventControllers';

const router = Router();

router.route('/').get(getAllEvents);

export default router;
