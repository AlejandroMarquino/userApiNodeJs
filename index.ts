import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.post('/users', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Registrado'); 
});


app.get('/', (req: Request, res: Response) => { 
  res.send('Bienvenido al registro. NodeJS + Express + JWT') 
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

app.use(express.json());