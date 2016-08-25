/*
 * main.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true
import AppView from './view/appView.js';

$(() => {
    let appView = new AppView();

    console.log(appView);
    console.log(appView.testing);
    console.log(appView.el);
    console.log(AppView.test);
});
