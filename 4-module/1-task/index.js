/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let list = document.createElement('ul');
  let listItem = '';
  for (let friend of friends) {
    listItem += `<li>${friend.firstName} ${friend.lastName}</li>`;
  }
  list.innerHTML = listItem;
  return list;
}

