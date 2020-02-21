/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
class SortableTable {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  constructor(items) {
    this.el = document.createElement('table');
    this.items = items;
    const thead = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead>';
    const tbody = '<tbody></tbody>';
    this.el.insertAdjacentHTML('afterbegin', thead);
    this.el.insertAdjacentHTML('beforeend', tbody);
    this.colProperty = ['name', 'age', 'salary', 'city'];
    this.render();
  }


  render(desc) {
    const body = this.el.querySelector('tbody');
    body.innerHTML = '';
    const place = desc ? 'afterbegin' : 'beforeend';

    for (let person of this.items) {
      let name = `<td>${person.name}</td>`;
      let age = `<td>${person.age}</td>`;
      let salary = `<td>${person.salary}</td>`;
      let city = `<td>${person.city}</td>`;
      let tr = name + age + salary + city;

      body.insertAdjacentHTML(place, tr);

    }
  }

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */

  sort(column, desc = false) {

    this.chosenColumn = column;

    this.items.sort((a, b) => {
      const index = this.colProperty[this.chosenColumn];
      let result = a[index] - b[index];
      if (!isNaN(result))
        return result;

      if (a[index] > b[index])
        return 1;

      if (a[index] == b[index])
        return 0;

      return -1;
    });

    this.render(desc);
  }
}
