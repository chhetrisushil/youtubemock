/*
 * searchView.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

let {View} = Backbone;

class SearchView extends View {
    /*jshint ignore: start*/
    template = _.template($('#template-searchInput').html());

    events = {
        'keypress #searchInput': 'onKeyPress',
        'click #search': 'onClick'
    };
    /*jshint ignore: end*/

    constructor() {
        super();
        this.render();
    }

    render() {
        this.$el.html(this.template());

        return this;
    }

    onKeyPress(e) {
        console.log(e);
        this.doSearch(e);
    }

    onClick(e) {
        console.log(e);
        this.doSearch(e);
    }

    doSearch(e) {
        console.log(e);
    }
}

export default SearchView;
