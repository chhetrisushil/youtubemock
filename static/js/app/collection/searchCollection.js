/*
 * searchCollection.js
 * Copyright (C) 2016 Sushil Chhetri <Sushil.Chhetri@exponential.com>
 */
//jshint esnext: true
import SearchModel from '../model/searchModel.js';

let {Collection} = Backbone;

class SearchCollection extends Collection {
    /*jshint ignore: start*/
    model = SearchModel;
    /*jshint ignore: end*/

    constructor(models, options) {
        super(models, options);
        this.model = SearchModel;

        Collection.apply(this, arguments);
    }
}

export default SearchCollection;
