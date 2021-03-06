/* Constants and required */
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const STATUS_USER_ERROR = 422;
const STATUS_OK = 200;

const server = express();
const PORT = 3030;

server.use(bodyParser.json());

const PAST_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';
const CURRENT_URL = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';


/* Code start */

/* Current Crypto Prices */
server.get('/current', (req, res) => {
    const current = req.body.current;
    const urlCurr = CURRENT_URL;
    console.log(CURRENT_URL)
    fetch(urlCurr)
        .then(current => current.json())
        .then(current => {
            console.log(current);
            res.status(STATUS_OK);
            res.json(current);
        })
        .catch(error => {
            res.status(STATUS_USER_ERROR);
            res.json({ error: error });
        })
});

/* Past Crypto Prices */
server.get('/past', (req, res) => {
    const past = req.body.past;
    const urlPast = PAST_URL;
    console.log(PAST_URL);
    fetch(urlPast)
        .then(past => past.json())
        .then(past => {
            console.log(past);
            res.status(STATUS_OK);
            res.json(past);
        })
        .catch(error => {
            res.status(STATUS_USER_ERROR);
            res.json({ error: error });
        })
})

/*Code end */

/*The Server is Listening #creepy*/
server.listen(PORT, err => {
    if(err) {
        console.log(`There was an error starting server: ${err}`)
    } else {
        console.log(`Server listening on ${PORT}`);
    }
})