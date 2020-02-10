/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let words = str.split('-');
  let newWords = [];
  newWords.push(words[0]);
  words.forEach((item, index, array) => {
    word = ucFirst(item);
    newWords.push(word);
  });
  newWords.splice(1, 1);
  return newWords.join('');
}

function ucFirst(str) {
  let firstLetter = str.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  part = str.slice(1);
  let word = firstLetter + part;
  return word;
}
