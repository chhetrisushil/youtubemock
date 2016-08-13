/*
 * utility.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true

let toString = Object.prototype.toString,
    slice = Array.prototype.slice,
    hasProp = Object.prototype.hasOwnProperty,
    noop = function noop() {},
    hasProperty, extend, inherit, isString, isArray, isFunction, isObject,
    isBoolean, isUndefined, isNull, toArray, assert, each, getArgumentsInfo;

function typeOf(type) {
    var regEx = new RegExp('\\[object ' + type + '\\]', 'i');

    return (variable) => {
        return regEx.test(toString.call(variable));
    };
}

/**
 * @function
 */
isString = typeOf('String');
export {
    isString
};

/**
 * @function
 */
isFunction = typeOf('Function');
export {
    isFunction
};

/**
 * @function
 */
isObject = typeOf('Object');
export {
    isObject
};

/**
 * @function
 */
isArray = typeOf('Array');
export {
    isArray
};

/**
 * @function
 */
isBoolean = typeOf('Boolean');
export {
    isBoolean
};

/**
 * @function
 */
isUndefined = typeOf('Undefined');
export {
    isUndefined
};

/**
 * @function
 */
isNull = typeOf('Null');
export {
    isNull
};

/**
 * @function
 */
hasProperty = (obj, prop) => {
    return hasProp.call(obj, prop);
};
export {
    hasProperty
};

/**
 * Converts Array LIKE objects to Array
 *
 * @param obj {Object}: Array LIKE object
 * @return {Array}: Array
 */
toArray = (obj, index) => {
    return slice.call(obj, index || 0);
};
export {
    toArray
};
