import express, { Application } from 'express';

const port = process.env.PORT || 8000;

const app: Application = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'test'});
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
