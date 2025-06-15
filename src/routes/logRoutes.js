"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logControllers_1 = require("../controllers/logControllers");
const router = express_1.default.Router();
router.post('/log-entry', logControllers_1.createLog);
router.get('/log-entry/:userId', logControllers_1.getLogsByUser);
router.put('/log-entry/:id', logControllers_1.updateLog);
router.delete('/log-entry/:id', logControllers_1.deleteLog);
exports.default = router;
