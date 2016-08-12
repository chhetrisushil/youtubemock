/*
 * server.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

const express = require('express'),
    morgan = require('morgan'),
    compression = require('compression');

class Server {
    constructor() {
        let app = this.app = express();

        app.set('port', (process.env.PORT || 7000));
        app.use(compression());
        app.use(morgan('combined'));
        app.use(express.static('./'));
    }

    start() {
        this.app.listen(this.app.get('port'), this.stats.bind(this));
    }

    stats(err) {
        if (err) {
            console.log(err);

            return;
        }

        console.log('Server running on: http://localhost:' + this.app.get('port'));
    }
}

// Initialise server
var server = new Server();

// start server
server.start();
