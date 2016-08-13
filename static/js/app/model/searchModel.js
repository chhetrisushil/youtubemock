/*
 * searchModel.js
 * Copyright (C) 2016 Sushil Chhetri <Sushil.Chhetri@exponential.com>
 */
//jshint esnext: true
let {Model} = Backbone;

class SearchModel extends Model {
    constructor(attributes, options) {
        super(attributes, options);

        Model.apply(this, arguments);
    }
}

export default SearchModel;
