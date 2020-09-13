import express from 'express';
import './database/db.js';
import cors from 'cors';
import Card from './model/card.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/', (req, res) => {
  return res.send('Hello');
});

app.get('/api', async (req, res) => {
  let cards = await Card.find().exec();
  console.log(cards);
  return res.json(cards);
});

const port = process.env.PORT ?? 3001;

app.listen(port, () => {
  console.log('Connected', port + '----------------------------------------------------------------------------->');
});
