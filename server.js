const express = require('express');

const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

const server = express();

server.use( 
            express.json(), 
            helmet(), 
            cors(), 
            logger()
        );

module.exports = server;