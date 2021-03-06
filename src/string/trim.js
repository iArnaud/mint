import whitespaces from '../internal/whitespaces.regex';
import string from '../to/string';
import rest from '../array/rest';

/**
 * Removes leading and trailing whitespaces or given characters from `target`.
 *
 * @param {String} target The string to trim.
 * @returns {String} The trimmed string.
 *
 * @example
 *
 * st.trim('   lorem   ');
 * // => 'lorem'
 *
 * st.trim('*+/lorem/+*', '/', '+*');
 * // => 'lorem'
 */
function trim(target) {
    var chars = rest(arguments).join('');
    target = string(target);

    if (target.length === 0) {
        return '';
    }

    chars = chars.length ? chars : whitespaces;
    return target.replace(new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'ig'), '');
}

export default trim;