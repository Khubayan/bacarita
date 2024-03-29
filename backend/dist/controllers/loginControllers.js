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
exports.postSignIn = exports.postLogin = exports.getHelloWorld = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnect_1 = __importDefault(require("../services/dbConnect"));
const LoginSuccess_1 = require("../services/LoginSuccess");
const FailLogin_1 = __importDefault(require("../services/FailLogin"));
const ErrorLogin_1 = __importDefault(require("../services/ErrorLogin"));
const env = dotenv_1.default.config().parsed;
const db = dbConnect_1.default;
let token = '';
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
        console.log(req.body.email, req.body.password);
        db.query(query, values, (error, result) => {
            if (error) {
                res.status(505).json((0, ErrorLogin_1.default)(error));
            }
            if (result.length > 0) {
                console.log('ini auth', req.headers.authorization);
                const response = (0, LoginSuccess_1.LoginSuccess)(env.JWT_SECRET_KEY, result);
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
const postSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = `INSERT INTO ${env.TB_USER} (id_user, email, password) VALUES (?, ?, ?)`;
        const values = [
            Math.floor(Math.random() * (1000 - 4 + 1)) + 4,
            req.body.email,
            req.body.password,
        ];
        console.log(req.body.email, req.body.password);
        db.query(query, values, (error, result) => {
            if (error) {
                res.status(505).json((0, ErrorLogin_1.default)(error));
            }
            else {
                console.log('User inserted successfully');
                const response = { message: 'User inserted successfully' };
                res.status(200).json(response);
            }
        });
    }
    catch (e) {
        console.error('Error during user insertion:', e);
        res.status(500).json({ error: `Internal server error ${e}` });
    }
});
exports.postSignIn = postSignIn;
