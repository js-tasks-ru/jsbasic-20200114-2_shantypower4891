/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

  for (let i = 0; i < table.rows.length; i++) {
    cell = table.rows[i].cells[i];
    cell.style.backgroundColor = 'red';
  }
}
