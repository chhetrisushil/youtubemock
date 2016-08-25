/*
 * view.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

class View {
    get tagName() {
        return this.__tagName__;
    }

    set tagName(val) {
        this.__tagName__ = val;
    }

    get el() {
        return document.createElement(this.__tagName__ || 'div');
    }

    constructor() {
    }
}

export
default View;
