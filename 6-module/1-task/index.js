/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement("table");
    this.data = data;
    const thead =
      "<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead>";
    const tbody = "<tbody></tbody>";
    this.el.insertAdjacentHTML("afterbegin", thead);
    this.el.insertAdjacentHTML("beforeend", tbody);
    this.colProperty = ["id", "name", "age", "salary", "city"];
    const id = this.colProperty[0];
    const body = this.el.querySelector("tbody");


    for (let person of this.data) {
      let name = `<td>${person.name}</td>`;
      let age = `<td>${person.age}</td>`;
      let salary = `<td>${person.salary}</td>`;
      let city = `<td>${person.city}</td>`;
      let closebtn = `<td><a data-id="${person.id}" href="#delete">X</a></td>`;
      let tr = name + age + salary + city + closebtn;
      if (id != person.id) {
        body.insertAdjacentHTML("beforeend", tr);
      }
    }
    this.el.addEventListener("click", event => this.onClick(event));
  }

  onClick(event) {
    let btn = event.target.tagName;
    if (btn != 'A') {
      return;
    }
    let row = event.target.closest("tr");
    event.preventDefault();
    let id = row.querySelector("[data-id]").getAttribute("data-id");
    row.remove();

    this.onRemoved(parseInt(id, 10));
  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    console.log(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
