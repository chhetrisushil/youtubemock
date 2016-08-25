/*
 * view.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

class View {
    //jshint ignore: start
    __tagName__ = 'div';
    //jshint ignore: end

    get tagName() {
        return this.__tagName__;
    }

    set tagName(val) {
        this.__tagName__ = val;
    }

    get el() {
        return document.createElement(this.__tagName__);
    }

    constructor() {
    }
}

export
default View;
