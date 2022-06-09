import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.post('/users', (req: Request, res: Response) => {
  console.log(req);
  res.send(req.body);
});


app.get('/', (req: Request, res: Response) => {
  res.send('NodeJs + Express');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});