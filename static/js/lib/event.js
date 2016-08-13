/*
 * event.js
 * Copyright (C) 2016 Sushil Chhetri <chhetrisushil@gmail.com>
 */
//jshint esnext: true
import {
    isString, isFunction, hasProperty
}
from './utility.js';

function getNamespace(e) {
    let eventName = e,
        namespace, list;

    ~e.indexOf('.') && (list = e.split('.'), eventName = list.shift(), namespace = list.shift()); //jshint ignore: line

    return [eventName, namespace];
}

function callAllHandlers(eventName, listeners, args) {
    var listener = listeners[0];
    for (; listener = listeners.shift();) { //jshint ignore: line
        try {
            listener.handler.apply(this, args);
        } catch (e) {
            throw new Error('Exception' + e + ' occured in listener call for event ' + eventName + ', listener ' + listener.handler.toString());
        }
    }
}

class Event {
    //jshint ignore: start
    __listeners__ = null;
    __uidPrefix__ = 'Event_UID_';
    __uid__ = 1;
    //jshint ignore: end

    constructor() {
        this.__listeners__ = {};
    }

    add(eventName, handler, identifier = (this.__uidPrefix__ + this.__uid__++)) {
        if (!(eventName && isString(eventName))) {
            throw new TypeError('expected type a non-empty String for eventName');
        }

        if (!(handler && isFunction(handler))) {
            throw new TypeError('expected type Function for handler');
        }

        let listener = {
                type: eventName,
                handler: handler,
                namespace: null,
                id: identifier
            },
            list;
        // for events with namespace the format is type.namespace
        [listener.type, listener.namespace] = getNamespace(eventName);

        !this.__listeners__[listener.type] && (this.__listeners__[listener.type] = []); //jshint ignore: line

        this.__listeners__[listener.type].push(listener);

        return identifier;
    }

    fire(eventName, ...args) {
        if (!(eventName && isString(eventName))) {
            throw new TypeError('expected type a non-empty String for eventName');
        }

        let namespace, list, listeners;

        // for events with namespace the format is type.namespace
        [eventName, namespace] = getNamespace(eventName);

        // get the list of listener for the eventName
        listeners = this.__listeners__[eventName] || [];

        if (namespace) {
            listeners = listeners.filter((item) => item.namespace === namespace);
        }

        listeners && listeners.length && callAllHandlers.call(this, eventName, listeners.slice(), args); //jshint ignore: line

    }

    remove(eventName, handler) {
        if (!(eventName && isString(eventName))) {
            throw new TypeError('expected type a non-empty String for eventName');
        }

        var namespace, list, identifier, listeners;

        // for events with namespace the format is type.namespace
        [eventName, namespace] = getNamespace(eventName);

        identifier = (isString(handler)) ? handler : null;
        listeners = this.__listeners__[eventName] || [];

        if (!listeners.length) {
            return;
        }

        if (namespace) {
            if (!identifier && !handler) {
                this.__listeners__[eventName] = listeners.filter((item) => item.namespace !== namespace);
            } else if (identifier) {
                this.__listeners__[eventName] = listeners.filter((item) => item.namespace !== namespace || item.id !== identifier);
            } else if (handler) {
                this.__listeners__[eventName] = listeners.filter((item) => item.namespace !== namespace || item.handler !== handler);
            }

            if (!this.__listeners__[eventName].length) {
                delete this.__listeners__[eventName];
            }

            return;
        }

        if (identifier) {
            this.__listeners__[eventName] = listeners.filter((item) => item.id !== identifier);

            if (!this.__listeners__[eventName].length) {
                delete this.__listeners__[eventName];
            }

        } else if (handler) {
            this.__listeners__[eventName] = listeners.filter((item) => item.handler !== handler);

            if (!this.__listeners__[eventName].length) {
                delete this.__listeners__[eventName];
            }

        } else {
            this.__listeners__[eventName] && this.__listeners__[eventName].length && delete this.__listeners__[eventName]; //jshint ignore: line
        }

        return;
    }

    removeByNamespace(namespace) {
        var item,
        filter = (item) => item.namespace !== namespace;

        for (item in this.__listeners__) {
            if (hasProperty(this.__listeners__, item)) {
                this.__listeners__[item] = this.__listeners__[item].filter(filter);

                if (!this.__listeners__[item].length) {
                    delete this.__listeners__[item];
                }
            }
        }
    }
}

export
default Event;
