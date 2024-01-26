"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bacaritaControllers_1 = require("../controllers/bacaritaControllers");
const router = (0, express_1.Router)();
router.route('/login').post(bacaritaControllers_1.postLogin);
// @ts-ignore // This line ignores the fact that verifyToken requires arguments, but Express automatically passes them.
router.use(bacaritaControllers_1.verifyToken);
// These endpoints below require authentication to access.
router.route('/hi').get(bacaritaControllers_1.getHelloWorld);
exports.default = router;
