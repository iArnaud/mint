import regex from '../internal/template.regex';
import array from '../is/array';
import object from '../is/object';
import string from '../is/string';
import arrayEach from '../array/each';
import objectEach from '../object/each';
import deepGet from './deepGet';
import trim from '../string/trim';

/**
 * Replaces tokens from `target` on corresponding values from `source`.
 *
 * @param {*} target The target object or array with tokens.
 * @param {Object|Array} source The values to replace.
 * @param {RegExp} syntax The regular expression to search for tokens.
 * @returns {Object} Target object or array with replaced tokens
 *
 * @example
 *
 * var target = {a: '${a}', b: '${c}', c: '${b}'},
 *     source = {a: 1, b: 5, c: 3};
 *
 * template(target, source);
 * // => {a: 1, b: 3, c: 5}
 */
function template(target, source, syntax = regex.es6) {
    if (string(target)) {
        if (target.length === 0) {
            return '';
        }

        return deepGet(source, trim(target.replace(syntax, '$1')), target);
    }

    let isArr = array(target),
        isObj = object(target),
        fn;

    fn = (value, key) => { target[key] = template(value, source, syntax); };

    /* jshint -W030 */
    isArr && arrayEach(target, fn);
    isObj && objectEach(target, fn);
    /* jshint +W030 */

    return target;
}

export default template;