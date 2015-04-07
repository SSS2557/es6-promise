import {
  getCurrentZone
} from './utils';

export default function asap(callback, arg) {
  getCurrentZone().scheduleMicrotask(function() {
    callback(arg);
  });
}
