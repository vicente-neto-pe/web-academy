import express from 'express';
import validateEnv from './utils/validateEnv';
import router from './routes/router';
import { engine } from 'express-handlebars';

validateEnv();

export const app = express();

const PORT = process.env.PORT || 3333;
app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helpers/helpers.js`),
  }),
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
