"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEvents = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const executeQuery_1 = __importDefault(require("../helpers/executeQuery"));
const ENV = dotenv_1.default.config().parsed;
const getAllEvents = (req, res) => {
    try {
        const query = `SELECT * FROM ${ENV.TB_EVENT}`;
        (0, executeQuery_1.default)(query, res);
    }
    catch (e) {
        console.error('Error during fetch event data:', e);
        res.status(500).json({ error: `Internal server error ${e}` });
    }
};
exports.getAllEvents = getAllEvents;
