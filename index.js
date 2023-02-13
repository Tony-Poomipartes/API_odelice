require('dotenv').config();

const debug = require('debug')('cadex:server');
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  debug(`Server ready: http://localhost:${port}`);
});
