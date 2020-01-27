/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  str = str.toLocaleLowerCase();
  if (str.includes('1xbet') || str.includes('xxx')) {
    return true;
  }
  return false;
}
