import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { carsRouter } from './presentation/controllers/cars-controller';
import { databaseConnect } from './infra/database/typeorm';

const PORT = 8000;

/**
 * Create web app
*/
export const app = express();
app.use(cors());
app.use(bodyParser.json());

/**
 * Routes configuration
*/
app.use(carsRouter)


databaseConnect()

app.listen(PORT, () => {
  console.log(`⚡️[node-clean] Server is running at http://localhost:${PORT}`);
});

