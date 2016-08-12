/*
 * appView.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

import SearchView from './searchView.js';

let {View}= Backbone;

class AppView extends View {
    constructor() {
        super();
        this.setElement('#app');
    }

    render() {
        var searchView = new SearchView();

        //render search view
        this.$el.append(searchView.$el);

        return this;
    }
}

export default AppView;
