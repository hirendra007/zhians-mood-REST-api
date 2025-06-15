import express from 'express';
import {
  createLog,
  getLogsByUser,
  updateLog,
  deleteLog,
} from '../controllers/logControllers';

const router = express.Router();

router.post('/log-entry', createLog);
router.get('/log-entry/:userId', getLogsByUser);
router.put('/log-entry/:id', updateLog);
router.delete('/log-entry/:id', deleteLog);

export default router;
