"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mysql_1 = __importDefault(require("mysql"));
const env = dotenv_1.default.config().parsed;
// db
const DbConfig = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
};
const dbConnect = mysql_1.default.createConnection(DbConfig);
dbConnect.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});
exports.default = dbConnect;
