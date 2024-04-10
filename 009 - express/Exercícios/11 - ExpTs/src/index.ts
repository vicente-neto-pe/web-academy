import express from 'express';
import validateEnv from './utils/validateEnv';
import router from './routes/router';
import { engine } from 'express-handlebars';

validateEnv();

const app = express();

const PORT = process.env.PORT || 3333;

app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helpers/helpers.js`),
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);
app.use('/css', express.static(`public`));

app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
