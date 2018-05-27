const express = require('express');
const parser = require('body-parser');
const path = require('path');

require('../db/config');

const { router } = require('./router');
const app = express();
const PORT = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));
app.use('/api', router);

app.listen(PORT, (err) => {
  err ? console.log('err = ', err) : console.log('successfully started server')
})
