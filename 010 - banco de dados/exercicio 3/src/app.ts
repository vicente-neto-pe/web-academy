import express from 'express';
import router from './routes';
import { PrismaClient } from '@prisma/client';

const app = express();

app.use(express.json());
app.use(router);

export const prisma = new PrismaClient({
    log: ['query'],
  });
const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>   console.log(`Express app iniciada na porta ${PORT}.`));
