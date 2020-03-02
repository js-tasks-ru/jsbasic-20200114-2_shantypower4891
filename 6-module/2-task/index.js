'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  currentSlideIndex = 0;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.insertCarouselTemplate();
    this.slidesContainer = document.querySelector('.carousel-inner');
    this.slidesContainer.innerHTML = this.insertSlideTemplate(this.slides[0]);
    this.el.querySelectorAll('.carousel-indicator')[0].classList.add('active');
    this.onNextClick();
    this.onPrevClick();
    this.onBulletClick();
  }

  nextButtonHandler() {
    this.currentSlideIndex++;
    if (this.currentSlideIndex > this.slides.length - 1) {
      this.currentSlideIndex = 0;
    }
    this.slidesContainer.innerHTML = this.insertSlideTemplate(this.slides[this.currentSlideIndex]);
    this.deActivateBullet();
    this.el.querySelectorAll('.carousel-indicator')[this.currentSlideIndex].classList.add('active');
  }

  prevButtonHandler() {
    this.currentSlideIndex--;
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }
    this.slidesContainer.innerHTML = this.insertSlideTemplate(this.slides[this.currentSlideIndex]);
    this.deActivateBullet();
    this.el.querySelectorAll('.carousel-indicator')[this.currentSlideIndex].classList.add('active');
  }

  bulletHandler(bullet, id) {
    if (!bullet) {
      return;
    }
    this.slidesContainer.innerHTML = this.insertSlideTemplate(this.slides[id]);
    this.deActivateBullet();
    bullet.classList.add('active');
  }

  deActivateBullet() {
    const bullets = this.el.querySelectorAll('.carousel-indicator');
    for (const it of bullets) {
      it.classList.remove('active');
    }
  }

  onNextClick() {
    this.el.querySelector('.carousel-control-next').addEventListener('click', () => {
      this.nextButtonHandler();
    });
  }

  onPrevClick() {
    this.el.querySelector('.carousel-control-prev').addEventListener('click', () => {
      this.prevButtonHandler();
    });
  }

  onBulletClick() {
    this.el.querySelector('.carousel-indicators').addEventListener('click', (event) => {
      let id = event.target.getAttribute('data-slide-to');
      let bullet = this.el.querySelector(`*[data-slide-to = "${id}"]`);
      this.bulletHandler(bullet, id);
    });
  }

  insertCarouselTemplate() {
    return `<div id="mainCarousel" class="main-carousel carousel slide">
    <ol class="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
    </ol>
    <div class="carousel-inner">
        <!--Вот здесь будет активный слайд-->
    </div>

    <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
</div>`;
  }

  insertSlideTemplate(slide) {
    return `<div class="carousel-item active">
    <img src="${slide.img}" alt="Activelide">
    <div class="container">
        <div class="carousel-caption">
            <h3 class="h1">${slide.title}</h3>
            <div>
                <a class="btn" href="#" role="button">
                    View all DEALS
                    <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                </a>
            </div>
        </div>
    </div>
</div>`;
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
