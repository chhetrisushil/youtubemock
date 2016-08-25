/*
 * appView.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true
import View from '../../lib/view.js';

let Mixin = Test => class extends Test {
    testing() {
        console.log('testing');
    }
};

class AppView extends Mixin(View) {
    //jshint ignore: start
    tagName = 'span';
    //jshint ignore: end

    constructor(options) {
        super(options);
    }

    static test() {
        console.log('test');
    }
}

export
default AppView;
