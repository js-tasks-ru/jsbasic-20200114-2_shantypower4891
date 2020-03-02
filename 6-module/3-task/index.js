'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">

       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

      </ul>
    </li>

    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">

       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.insertTemplate();
    this.onMainMenuItemEvent();
  }

  insertTemplate() {
    return this.template;
  }

  mainMenuItemToggler(event) {
    let dropdown = event.target.querySelector('.dropdown-menu');
    let backdrop = document.querySelector('.backdrop');
    dropdown.classList.toggle('show');
    if (backdrop) {
      backdrop.classList.toggle('show');
    }
  }

  onMainMenuItemEvent() {
    let listGroupItems = this.el.querySelectorAll('.list-group-item');

    for (const item of listGroupItems) {
      item.addEventListener('pointerenter', (event) => {
        this.mainMenuItemToggler(event);
      });

      item.addEventListener('pointerleave', (event) => {
        this.mainMenuItemToggler(event);
      });
    }
  }

}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
