'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '127.1.1.1';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);