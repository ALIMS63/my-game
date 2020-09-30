import express from 'express';
import bcrypt from 'bcrypt';
import Card from '../models/card.js';
import User from '../models/user.js';

const router = express.Router();

function serializeUser(user) {
  return {
    id: user._id,
    name: user.name,
  };
}


router.get('/', (req, res) => {
  return res.send('Hello');
});

router.get('/api', async (req, res) => {
  let cards = await Card.find().exec();
  console.log(cards);
  return res.json(cards);
});

router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).exec();
  if (!user) {
    res.status(401);
    res.json({ message: 'Указана неверная электронная почта' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    res.status(401);
    res.json({ message: 'Указан неверный пароль' });
  }
  console.log(serializeUser(user));
  req.session.user = serializeUser(user);
  console.log(req.session.user);
  res.status(200);
  return res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  });
});

router.post('/api/registration', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  let user;
  const validUsername = await User.findOne({ name, email });
  if (validUsername) {
    res.status(401);
    res.json({ message: 'Пожалуйста, попробуйте изменить введенные данные и повторите регистрацию' });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    req.session.user = serializeUser(user);
    res.status(200);
    return res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    });
  }
});

router.get('/api/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie(req.app.get('session cookie name'));
      res.end();
    });
  } else {
    res.end();
  }
});


export default router;
