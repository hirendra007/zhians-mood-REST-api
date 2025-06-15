import express from 'express';
import cors from 'cors';
import logRoutes from './routes/logRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🎉 Zhians Mood API is live! Try /api/log-entry');
});

app.use('/api', logRoutes);


export default app;
const PORT = process.env.PORT || 3000;
