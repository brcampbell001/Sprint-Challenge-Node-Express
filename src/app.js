const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const STATUS_USER_ERROR = 422;
const STATUS_OK = 200;

const server = express();
const PORT = 3030;

server.use(bodyParser.json());

/* Code start */


/*Code end */



server.listen(PORT, err => {
    if(err) {
        console.log(`There was an error starting server: ${err}`)
    } else {
        console.log(`Server listening on ${PORT}`);
    }
})