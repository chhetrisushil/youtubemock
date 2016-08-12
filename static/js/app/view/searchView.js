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

    onKeyPress({which, target}) {
        if (which === 13) {
            this.doSearch($(target).val());
        }
    }

    onClick(e) {
        this.doSearch(this.$('#searchInput').val());
    }

    doSearch(val='') {
        console.log(val.trim());
    }
}

export default SearchView;
