import express, { Express } from 'express';
import cors from 'cors';
import auth from './routes/auth.js';
import territories from './routes/territories.js';

const app: Express = express();
const PORT = 8000;

// middleware declarations
app.use(cors());
app.use(express.json());
app.use('/api', auth);
app.use('/api', territories);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
