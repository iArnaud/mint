/**
 * Removes a substring in a string from `start` to `end` positions.
 *
 * @param {string} target The given string.
 * @param {number} start The position of start removing.
 * @param {number} end The position of finish removing.
 * @returns {string} Returns the string without the substring.
 *
 * @example
 *
 * st.remove('Hello, World!', 5, -1);
 * // => 'Hello!'
 *
 * st.remove('Hello, World!', 90, 100)
 * // => 'Hello, World!'
 */
function remove(target, start, end) {
    var length = target.length;
    start = start | 0;
    end = end | 0;

    start = start < 0 ? length + start : start;
    end = end < 0 ? length + end : end;

    if (start > end) {
        throw new RangeError('Start index must be less than end index');
    }

    return target.slice(0, start) + target.slice(end);
}

export default remove;