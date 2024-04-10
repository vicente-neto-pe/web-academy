import express from "express";
import validateEnv from "./utils/validateEnv";
import router from './routes/router';

validateEnv();

const app = express();

const PORT = process.env.PORT || 3333;

app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
