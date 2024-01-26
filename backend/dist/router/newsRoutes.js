"use strict";
// @ts-nocheck
// This directive is used to bypass TypeScript checking.
// We're ignoring the requirement for an argument in the controller because Express handles it automatically.
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginControllers_1 = require("../controllers/loginControllers");
const newsController_1 = require("../controllers/newsController");
const router = (0, express_1.Router)();
router.use(loginControllers_1.verifyToken);
router.route('/').get(newsController_1.getAllNews);
exports.default = router;
