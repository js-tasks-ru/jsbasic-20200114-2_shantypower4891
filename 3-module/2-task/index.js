/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let parts1 = [];
  let parts2 = [];
  let parts = [];
  let numbers = [];
  parts1 = str.split(' ');

  parts2 = str.split(',');

  parts = parts1.concat(parts2);
  parts.forEach((item, index, array) => {
    if (+item) {
      numbers.push(+item);
    }
  });
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let result = {};
  result.min = min;
  result.max = max;
  return result;
}
