/*
 * appView.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

var {
    Model, View, Collection
} = Backbone;

class AppView extends Model {
    render() {
        console.log('render');
    }
}

export default new AppView();
