const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let book = {};
  let count = 0;
  for (let index = 0; index < s1.length; index++) {
    if (s1[index] in book) {
      book[s1[index]]++;
    } else {
      book[s1[index]] = 1;
    }
  }
  for (let index = 0; index < s2.length; index++) {
    if (s2[index] in book && book[s2[index]] > 0) {
      book[s2[index]]--;
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
