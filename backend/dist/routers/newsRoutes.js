"use strict";
// @ts-nocheck
// This directive is used to bypass TypeScript checking.
// We're ignoring the requirement for an argument in the controller because Express handles it automatically.
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsController_1 = require("../controllers/newsController");
const router = (0, express_1.Router)();
// router.use(verifyToken);
router.route('/').get(newsController_1.getAllNews);
router.route('/search').get(newsController_1.getSearchNews);
router.route('/tags').get(newsController_1.getNewsByTag);
exports.default = router;
