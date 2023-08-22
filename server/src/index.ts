import express, { Express } from 'express';
import cors from 'cors';
import session from 'express-session';
import auth from './routes/auth.js';
import territories from './routes/territories.js';

const app: Express = express();
const PORT = 8000;

// middleware declarations
app.use(cors());
app.use(session({
  secret: 'test-secret', // key to sign the cookie
  resave: false, // for every request to the server, create a new session
  saveUninitialized: false, // if we have not modified the session, we don't want it to be saved
  cookie: {
    maxAge: 1000 * 60 * 60 /* 60min */,
    httpOnly: false,
  },
}));
app.use(express.json());
app.use('/api', auth);
app.use('/api', territories);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
