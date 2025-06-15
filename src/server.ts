import express from 'express';
import cors from 'cors';
import logRoutes from './routes/logRoutes'; // ✅ Correct relative path

const app = express();

app.use(cors());
app.use(express.json());

// Mount the mood log routes
app.use('/api', logRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
