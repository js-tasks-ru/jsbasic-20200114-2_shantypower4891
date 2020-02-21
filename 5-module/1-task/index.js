/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tds = table.querySelectorAll('td');
  console.log('tds', tds);
  [].forEach.call(tds, function (elem) {
    let tr = elem.closest('tr');
    if (+elem.innerHTML < 18) {
      tr.setAttribute('style', 'text-decoration: line-through');
    }

    if (elem.innerHTML === 'm') {
      tr.classList.add('male');
    }
    if (elem.innerHTML === 'f') {
      tr.classList.add('female');
    }
    if (!elem.hasAttribute('hidden')) {
      tr.setAttribute('hidden', ' ');
    }
    if (elem.dataset.available === 'true') {
      tr.classList.add('available');
    }
    if (elem.dataset.available === 'false') {
      tr.classList.add('unavailable');
    }
  });
}
