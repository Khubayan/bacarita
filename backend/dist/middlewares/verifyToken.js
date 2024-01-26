"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const LoginSuccess_1 = require("../services/LoginSuccess");
const env = dotenv_1.default.config().parsed;
const verifyToken = (req, res, next) => {
    if (!LoginSuccess_1.loginToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jsonwebtoken_1.default.verify(LoginSuccess_1.loginToken, env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        if (decoded) {
            const verifiedUserData = decoded;
            req.userData = verifiedUserData.data;
        }
        next();
    });
};
exports.verifyToken = verifyToken;
