/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let firstLetter = str.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  part = str.slice(1);
  let word = firstLetter + part;
  return word;
}
