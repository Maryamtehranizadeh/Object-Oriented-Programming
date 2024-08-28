import Products from "./models/Products.js";
import Cart from "./models/Cart.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

async function render() {
  const productsData = await fetchData();
  // console.log(productsData);
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  // console.log(cartInstance);
  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );

  // console.log(productsInstance);
  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
