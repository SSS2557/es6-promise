/*global self*/

export function objectOrFunction(x) {
  return typeof x === 'function' || (typeof x === 'object' && x !== null);
}

export function isFunction(x) {
  return typeof x === 'function';
}

export function isMaybeThenable(x) {
  return typeof x === 'object' && x !== null;
}

var _isArray;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

export var isArray = _isArray;

var _global;

export function getGlobal() {
  if (!_global) {
    if (typeof global !== 'undefined') {
        _global = global;
    } else if (typeof self !== 'undefined') {
        _global = self;
    } else {
        try {
            _global = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }
  }

  return _global;
}

export function getCurrentZone() {
  return getGlobal().zone;
}

export function setCurrentZone(zone) {
  getGlobal().zone = zone;
}
