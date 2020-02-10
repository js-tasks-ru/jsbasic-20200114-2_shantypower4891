/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let user = data.filter(item => item.age <= age);
  let target = '';
  let result = [];
  let list = '';
  user.forEach((item, index, array) => {
    target = item.name + ', ' + item.balance;
    result.push(target);

  });
  list = result.join('\n');
  return list;
}
