class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.insertProductsContainer();
    this.productsContainer = this.el.querySelector('.homepage-cards');
  }

  insertProductsContainer() {
    return `<div class="row justify-content-end">
    <div class="col-lg-9">
        <h3 class="section-title">Top Recommendations for You</h3>
        <div class="row homepage-cards">
            <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
        </div>
    </div>
  </div>`;
  }

  insertProductPrice(product) {
    let priceHtml = '';
    if (product.oldPrice === null) {
      priceHtml =
        `<p class="card-text price-text">
        <strong>${product.price}</strong>
      </p>`;
    } else {
      priceHtml =
        `<p class="card-text price-text discount">
      <strong>${product.price}</strong>
      <small class="ml-2">${product.oldPrice}</small>
  </p>`;
    }
    return priceHtml;
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
      starTemplate += `<span class="rate-amount ml-2">${product.rating.reviewsAmount}</span>`
    }
    return starTemplate;
  }

  insertProductItem(product) {
    let productHtml = `<div data-product-id="${product.id}" class="products-list-product col-md-6 col-lg-4 mb-4">
    <div class="card">
        <div class="card-img-wrap">
            <img class="card-img-top" src="https://iliakan.github.io/course-project/assets/images/turntable.png" alt="Card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <div class="rate">` +
              this.insertRatingHtml(product) +
            `</div>`
            + this.insertProductPrice(product) +
            `<button class="product-add-to-cart" data-button-role="add-to-cart">
                      Add to cart
                    </button>
                </div>
            </div>
          </div>`;
    return productHtml;
  }

  show() {
    return fetch(this.productsUrl)
      .then(response =>
        response.json()
      ).then(products => {
        this.products = products;
        let productItem = '';
        for (const item of this.products) {
          productItem += this.insertProductItem(item);
        }
        this.productsContainer.innerHTML = productItem;
        const productsInCart = localStorage.getItem(this.productsStoreKey);
        console.log('productsInCart', productsInCart);
        if (productsInCart) {
          this.cartProducts = JSON.parse(productsInCart);
          console.log('cartProducts', this.cartProducts);
        }
        let cart = this.cartProducts;
        if (cart == null) {
          cart = [];
        }
        this.productsContainer.addEventListener('click', event => {
          if (event.target.dataset.buttonRole === 'add-to-cart' && confirm('Вы уверенны, что хотите добавить этот товар в корзину?')) {
            let productId = +event.target.closest('[data-product-id]').dataset.productId;

            if (!cart.find(id => id === productId)) {
              cart.push(productId);
            } else {
              alert('Этот товар уже добавлен в корзину!');
            }
            localStorage.setItem(this.productsStoreKey, JSON.stringify(cart));
          }
        });
      });
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
