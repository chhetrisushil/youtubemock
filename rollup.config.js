/*
 * rollup.config.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

import babel from 'rollup-plugin-babel';

export
default {
    entry: './static/js/app/main.js',
    plugins: [babel()],
    targets: [{
        dest: './static/js/app/dist/bundle.js',
        format: 'cjs'
    }]
};
