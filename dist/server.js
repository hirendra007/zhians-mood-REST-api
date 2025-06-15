"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const logRoutes_1 = __importDefault(require("./routes/logRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('🎉 Zhians Mood API is live! Try /api/log-entry');
});
app.use('/api', logRoutes_1.default);
const PORT = process.env.PORT || 3000;
exports.default = app;
