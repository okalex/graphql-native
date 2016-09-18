'use strict'

const express = require('express');

const config = require('../config') // Make sure NODE_ENV is set properly and config exists

const app = express();
require('./routes')(app)

app.listen(3000);
console.log('GraphQL server running on http://localhost:3000/api');
