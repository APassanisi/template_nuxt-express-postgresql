const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const port = parseInt(process.env.PORT, 10) || 8000;
const app = express();
const server = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/data', (req, res) => res.status(200).send({
  message: 'Data!',
}));

app.set('port', port);

server.listen(port);

module.exports = app;