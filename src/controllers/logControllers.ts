import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';


export const prisma = new PrismaClient();

export const createLog = async (req: Request, res: Response) => {
  try {
    const { userId, mood, food, cravings, notes } = req.body;

    const newLog = await prisma.logEntry.create({
      data: {
        userId,
        mood,
        food,
        cravings,
        notes,
      },
    });

    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ error: 'Error creating log entry' });
  }
};

export const getLogsByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const logs = await prisma.logEntry.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching logs' });
  }
};

export const updateLog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { mood, food, cravings, notes } = req.body;

    const updated = await prisma.logEntry.update({
      where: { id },
      data: { mood, food, cravings, notes },
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error updating log' });
  }
};

export const deleteLog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.logEntry.delete({ where: { id } });

    res.json({ message: 'Log deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting log' });
  }
};
