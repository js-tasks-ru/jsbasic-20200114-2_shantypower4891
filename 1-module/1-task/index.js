/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let box = n;
  while (n - 1) {
    box *= --n ;
  }
  return box;

}
