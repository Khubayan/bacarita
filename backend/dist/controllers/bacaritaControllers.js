"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = exports.getHelloWorld = exports.verifyToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dbConnect_1 = __importDefault(require("../services/dbConnect"));
const LoginSuccess_1 = __importDefault(require("../services/LoginSuccess"));
const FailLogin_1 = __importDefault(require("../services/FailLogin"));
const ErrorLogin_1 = __importDefault(require("../services/ErrorLogin"));
const env = dotenv_1.default.config().parsed;
const db = dbConnect_1.default;
let token = '';
// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jsonwebtoken_1.default.verify(token, env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        if (decoded) {
            const verifiedUserData = decoded;
            req.userData = verifiedUserData.data;
        }
        next();
    });
}; // debug
exports.verifyToken = verifyToken;
const getHelloWorld = (req, res, next) => {
    res.status(200).json({
        status: 'success',
        result: 'Hello World',
    });
};
exports.getHelloWorld = getHelloWorld;
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = `SELECT * FROM ${env.TB_USER} WHERE email = ? AND password = ?`;
        const values = [req.body.email, req.body.password];
        db.query(query, values, (error, result) => {
            if (error) {
                res.status(505).json((0, ErrorLogin_1.default)(error));
            }
            if (result.length > 0) {
                const response = (0, LoginSuccess_1.default)(env.JWT_SECRET_KEY, result);
                res.status(200).json(response);
                token = response.token;
            }
            else {
                res.status(400).json((0, FailLogin_1.default)());
            }
        });
    }
    catch (e) {
        console.error('Error during login:', e);
        res.status(500).json({ error: `Internal server error ${e}` });
    }
});
exports.postLogin = postLogin;
