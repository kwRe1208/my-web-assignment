process.env.NODE_ENV = 'development';
process.env.PORT = 8080;
const express = require('./config/express');

const app = express();

app.listen(process.env.PORT);

module.exports = app;

console.log('Express server listening on port 443');