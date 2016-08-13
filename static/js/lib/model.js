/*
 * model.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true
import Event from './event.js';

class Model extends Event {
    constructor() {
        super();
        console.log('Model base class');
    }
}

export
default Model;
