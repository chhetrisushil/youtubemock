/*
 * rollup.config.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
var plugins = [babel()];

if (process.env.NODE_ENV !== 'dev') {
    plugins.push(uglify());
}

export
default {
    entry: './static/js/app/main.js',
    plugins: plugins,
    targets: [{
        dest: './static/js/dist/bundle.js',
        format: 'cjs'
    }]
};
