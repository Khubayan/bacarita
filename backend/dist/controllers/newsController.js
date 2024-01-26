"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewsByTag = exports.getSearchNews = exports.getAllNews = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const executeQuery_1 = __importDefault(require("../helpers/executeQuery"));
const ENV = dotenv_1.default.config().parsed;
const getAllNews = (req, res) => {
    try {
        const query = `SELECT * FROM ${ENV.TB_NEWS}`;
        (0, executeQuery_1.default)(query, res);
    }
    catch (e) {
        console.error('Error during fetch news data:', e);
        res.status(500).json({ error: `Internal server error ${e}` });
    }
};
exports.getAllNews = getAllNews;
const getSearchNews = (req, res) => {
    try {
        const query = `SELECT * FROM ${ENV.TB_NEWS} WHERE title_berita LIKE ?`;
        const values = `%${req.query.keywords}%`;
        (0, executeQuery_1.default)(query, res, values);
    }
    catch (error) {
        console.error('Error during fetch news data:', error);
        res.status(500).json({ error: `Internal server error ${error.message}` });
    }
};
exports.getSearchNews = getSearchNews;
const getNewsByTag = (req, res) => {
    try {
        const query = `SELECT * FROM ${ENV.TB_NEWS} WHERE tag_berita LIKE ?`;
        const values = `%${req.query.tags}%`;
        (0, executeQuery_1.default)(query, res, values);
    }
    catch (error) {
        console.error('Error during fetch news data:', error);
        res.status(500).json({ error: `Internal server error ${error.message}` });
    }
};
exports.getNewsByTag = getNewsByTag;
