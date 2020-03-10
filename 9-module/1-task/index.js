'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';
  products = [];

  constructor(parentElement) {
    this.el = parentElement;
    parentElement.innerHTML = this.insertProductsContainer();
    this.productsContainer = this.el.querySelector('.product-list-box');

    const productsJSON = localStorage.getItem(this.productsStoreKey);
    if (productsJSON) {
      this.products = JSON.parse(productsJSON);
    }

    this.render();
    parentElement.addEventListener('click', event => {
      this.onClick(event);
    });
  }

  render() {
    let productItem = '';
    for (const item of this.products) {
      productItem += this.insertProductItem(item);
    }
    this.productsContainer.innerHTML = productItem;
  }

  onClick(event) {
    let target = event.target;
    let isDelFromCart = target.dataset.buttonRole === 'checkout-remove-product';
    if (!isDelFromCart) {
      return;
    }
    let isConfirmed = confirm('Вы уверенны, что хотите удалить этот товар из корзины?');
    if (!isConfirmed) {
      return;
    }
    const productId = +target.closest('[data-product-id]').dataset.productId;
    const productIndex = this.products.findIndex(product => product.id === productId);
    this.products.splice(productIndex, 1);
    localStorage.setItem(this.productsStoreKey, JSON.stringify(this.products));
    this.render();
  }

  insertProductsContainer() {
    return `<div class="product-list-box">
              <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
            </div>`;
  }

  insertProductItem(product) {
    return `<div data-product-id="${product.id}" class="product-wrapper box-inner-col description-col">

    <div class="product-image-container">
      <img class="product-image" src="${product.imageUrl}" alt="img">
    </div>

    <div class="product-description">
      <h4 class="col-title mb-2">${product.title}</h4>
      <div class="rate">` +
      this.insertRatingHtml(product) +
      `</div>
    </div>` +
    this.insertProductPrice(product) +
    `<div class="product-remove-button-wrapper">
      <button type="button"
              data-button-role="checkout-remove-product"
              class="product-remove-button">
        X
      </button>
    </div>

  </div>`;
  }

  insertRatingHtml(product) {
    let starTemplate = '';
    if (product.rating !== null) {
      for (let i = 1; i <= 5; i++) {
        if (i <= product.rating.stars) {
          starTemplate += `<i class="icon-star checked"></i>`;
        } else {
          starTemplate += `<i class="icon-star active"></i>`;
        }

      }
    }
    if (product.rating !== null) {
      starTemplate += `<p class="rate-amount d-none d-md-block mt-1">${product.rating.reviewsAmount}</p>`;
    }
    return starTemplate;
  }

  insertProductPrice(product) {
    let priceHtml = '';
    if (product.oldPrice === null) {
      priceHtml =
      `<div class="product-price">
      <p class="mb-0 font-weight-light">Price:</p>
      <h4 class="col-title price-text mb-2">${product.price}</h4>
    </div>`;
    }
    return priceHtml;
  }
}

window.CheckoutProductList = CheckoutProductList;
