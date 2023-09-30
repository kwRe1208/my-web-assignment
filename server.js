process.env.NODE_ENV = 'development';
const express = require('./config/express');
const app = express();

app.listen(process.env.PORT || 8080);

module.exports = app;

console.log('Express server listening on port 443');