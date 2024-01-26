"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginControllers_1 = require("../controllers/loginControllers");
const router = (0, express_1.Router)();
router.route('/').post(loginControllers_1.postLogin);
// @ts-ignore // This line ignores the fact that verifyToken requires arguments, but Express automatically passes them.
router.use(loginControllers_1.verifyToken);
// These endpoints below require authentication to access.
router.route('/hi').get(loginControllers_1.getHelloWorld);
exports.default = router;
