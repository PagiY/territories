import express, { Express } from 'express';

const app: Express = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
