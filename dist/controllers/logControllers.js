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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLog = exports.updateLog = exports.getLogsByUser = exports.createLog = exports.prisma = void 0;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
const createLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, mood, food, cravings, notes } = req.body;
        const newLog = yield exports.prisma.logEntry.create({
            data: {
                userId,
                mood,
                food,
                cravings,
                notes,
            },
        });
        res.status(201).json(newLog);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating log entry' });
    }
});
exports.createLog = createLog;
const getLogsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const logs = yield exports.prisma.logEntry.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
        res.json(logs);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching logs' });
    }
});
exports.getLogsByUser = getLogsByUser;
const updateLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { mood, food, cravings, notes } = req.body;
        const updated = yield exports.prisma.logEntry.update({
            where: { id },
            data: { mood, food, cravings, notes },
        });
        res.json(updated);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating log' });
    }
});
exports.updateLog = updateLog;
const deleteLog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield exports.prisma.logEntry.delete({ where: { id } });
        res.json({ message: 'Log deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting log' });
    }
});
exports.deleteLog = deleteLog;
