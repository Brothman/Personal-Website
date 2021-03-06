const connect = require('connect');
const serveStatic = require('serve-static');
const express = require('express');
const app = express();
const opn = require('opn');

const port = 3000;

connect().use(serveStatic(__dirname)).listen(port, () => {
    console.log(`Server is now running on Port ${port}`);
    opn('http://localhost:3000/');
});

//commented out because it only serves html for root response, i.e. '/'
// app.get('/*', serveStatic(__dirname));

// app.listen(port, () => {
//     console.log(`Server is now running on Port ${port}`);
// });
