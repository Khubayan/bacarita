"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = __importDefault(require("./routers/loginRoutes"));
const newsRoutes_1 = __importDefault(require("./routers/newsRoutes"));
const eventRoutes_1 = __importDefault(require("./routers/eventRoutes"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const env = dotenv_1.default.config().parsed;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use('/api/v1/login', loginRoutes_1.default);
app.use('/api/v1/news', newsRoutes_1.default);
app.use('/api/v1/event', eventRoutes_1.default);
const port = env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
exports.default = app;
