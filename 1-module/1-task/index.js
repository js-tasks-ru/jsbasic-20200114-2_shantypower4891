/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    do {
      n = n * (n - 1) ;
    }
    while (n > 1);
    return console.log(n + '! = ', factorial(n));
  }
}
