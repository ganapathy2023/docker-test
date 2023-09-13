'use strict';

const request = require("request");
const express = require('express');

// Constants
const PORT = process.env.PORT || 8003;
const HOST = process.env.HOST || 'localhost';

// App
const app = express();

app.get('/', (req, res) => {
  return res.send(`Hello Nemilink`);
});

app.listen(PORT);
console.log(`Running on port :${PORT}`);
