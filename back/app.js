const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const sessionFileStore = require('session-file-store');
require('./database/db.js');
const errorMiddleware = require('./middlewares/error.js');
const notFoundMiddleware = require('./middlewares/notfound.js');
const mainRouter = require('./routes/mainRouter.js');

const app = express();
const FileStore = sessionFileStore(session);

// Запоминаем название куки для сессий
app.set('session cookie name', 'sid');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    name: app.get('session cookie name'),
    secret: 'someSecret',
    // secret: process.env.SESSION_SECRET,
    store: new FileStore({
      // Шифрование сессии
      secret: process.env.SESSION_SECRET,
    }),
    // Если true, сохраняет сессию, даже если она не поменялась
    resave: false,
    // Если false, куки появляются только при установке req.session
    saveUninitialized: false,
  }),
);

app.use(
  methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  }),
);

// -----------------------------------------Routers
app.use('/', mainRouter);
// -----------------------------------------Routers

app.use((req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.status(401).end();
});
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(
    'Connected',
    port +
      '----------------------------------------------------------------------------->',
  );
});
