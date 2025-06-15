import express from 'express';
import cors from 'cors';
import logRoutes from './routes/logRoutes'; // ✅ Correct relative path

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Zhians Mood API is up and running! Use /api/log-entry');
});

// Mount the mood log routes
app.use('/api', logRoutes);

const PORT = process.env.PORT || 3000;
