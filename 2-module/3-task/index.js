let calculator = {
  num1: '',
  num2: '',
  read: function (a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  sum: function () {
    return (this.num1 + this.num2);
  },
  mul: function () {
    return (this.num1 * this.num2);
  }// ваш код
};

calculator.read(10, 55);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
