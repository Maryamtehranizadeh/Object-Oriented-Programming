class Products {
  constructor(parent, products, cart) {
    this.parent = parent;
    this.products = products;
    this.cart = cart;
    this.parent.addEventListener("click", this);
  }

  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }
  createCard(data) {
    const cardEle = document.createElement("div");
    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);
    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;

    this.parent.appendChild(cardEle);
  }
  productImg(data) {
    const { image, alt } = data;
    const imgJSX = `
    <img src=${image} alt=${alt}>
    `;
    return imgJSX;
  }
  productInfo(data) {
    const { price, id, name } = data;
    const infoJSX = `
    <div id="product-info">
      <h3>${name}</h3>
      <div>
        <span>$ ${price}</span>
        <button data-id=${id}>+</button>
      </div>
    </div>
    `;
    return infoJSX;
  }
  handleEvent(event) {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }
  addToCart(id) {
    // console.log("This item is added: number ", id);
    const product = this.products.find((i) => i.id === +id);
    this.cart.products.push(product);
    // console.log(this.cart);
    this.cart.showProducts();
  }
}

export default Products;