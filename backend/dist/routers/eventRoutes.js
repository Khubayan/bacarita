"use strict";
// @ts-nocheck
// This directive is used to bypass TypeScript checking.
// We're ignoring the requirement for an argument in the controller because Express handles it automatically.
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventControllers_1 = require("../controllers/eventControllers");
const router = (0, express_1.Router)();
router.route('/').get(eventControllers_1.getAllEvents);
exports.default = router;
