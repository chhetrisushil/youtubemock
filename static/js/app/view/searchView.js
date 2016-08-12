/*
 * searchView.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

let { View } = Backbone;

class SearchView extends View {
    /*jshint ignore: start*/
    template = _.template($('#template-searchInput').html());
    /*jshint ignore: end*/

    events() {
        return {
            'keypress #searchInput': 'onKeyPress',
            'click #search': 'onClick'
        };
    }

    constructor() {
        super();
        this.render();
    }

    render() {
        this.$el.html(this.template());

        return this;
    }

    onKeyPress(e) {
        if (e.which === 13) {
            this.doSearch((this.$('#searchInput').val() || '').trim());
        }
    }

    onClick(e) {
        this.doSearch((this.$('#searchInput').val() || '').trim());
    }

    doSearch(val) {
        console.log(val);
    }
}

export default SearchView;
