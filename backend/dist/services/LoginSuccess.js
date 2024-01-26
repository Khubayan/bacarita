"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSuccess = exports.generateToken = exports.loginToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.loginToken = '';
const generateToken = (JWT_SECRET_KEY, payload) => {
    const token = jsonwebtoken_1.default.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: payload,
    }, JWT_SECRET_KEY);
    return (exports.loginToken = token);
};
exports.generateToken = generateToken;
const LoginSuccess = (JWT_SECRET_KEY, queryResult) => {
    console.log('berhasil bang');
    // console.log(results[0].id_user)
    const payload = {
        // userID : results[0].id_user
        data: queryResult[0],
    };
    (0, exports.generateToken)(JWT_SECRET_KEY, payload);
    return {
        message: 'berhasil Login klengg',
        status: 200,
        token: exports.loginToken,
    };
};
exports.LoginSuccess = LoginSuccess;
