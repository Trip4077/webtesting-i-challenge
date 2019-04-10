const express = require('express');

const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

const server = express();
const routes = require('./api/routes');

server.use( 
            express.json(), 
            helmet(), 
            cors(),
            logger('dev')
        );

server.use('/', routes);

module.exports = server;