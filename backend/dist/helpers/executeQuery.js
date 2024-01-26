"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnect_1 = __importDefault(require("../services/dbConnect"));
const db = dbConnect_1.default;
const executeQuery = (query, res, values) => {
    db.query(query, values, (error, result) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (result.length > 0) {
            return res.status(200).json({ message: result });
        }
        else {
            return res.status(404).json({ message: 'No data was found' });
        }
    });
};
exports.default = executeQuery;
