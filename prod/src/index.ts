import express, { Express } from 'express';
import path from 'path';
import cors from 'cors';
import auth from './routes/auth.js';
import territories from './routes/territories.js';
import { fileURLToPath } from 'url';

const app: Express = express();
const PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../dist')));

// middleware declarations
app.use(cors());
app.use(express.json());
app.use('/api', auth);
app.use('/api', territories);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
