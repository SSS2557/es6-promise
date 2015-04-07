import Promise from './promise';
import {getGlobal} from './utils.js';

export default function polyfill() {
  getGlobal().Promise = Promise;
}
