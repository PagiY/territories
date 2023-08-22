import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import path from 'path';
import { fileURLToPath } from 'url';

import auth from './routes/auth.js';
import territories from './routes/territories.js';

const app: Express = express();

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../build')));

// middleware declarations
app.use(cors());
app.use(express.json());
app.use('/api', auth);
app.use('/api', territories);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
