// Exercise shopping cart
// https://github.com/zocom-christoffer-wallenberg/shopping-cart-exercise
//

let shoppingCart = [];
let products = document.getElementsByTagName("button");

document.getElementById("open-cart").addEventListener("click", function () {
  document.getElementById("cart").classList.toggle("hide");
  listProductsInCart();
});

//Function declarations
function updateCart() {
  document.getElementById("productsInCart").innerHTML = shoppingCart.length;
}

function listProductsInCart() {
  let cartProducts = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    cartProducts +=
      '<li><span class="title-wrapper"><span class="product-title">Titel: </span>' +
      shoppingCart[i] +
      '</span><button class="del-button">Remove product</button>' +
      "</li>";
  }
  document.getElementById("products").innerHTML = cartProducts;

  let delButtons = document
    .getElementById("products")
    .getElementsByTagName("button"); // finding all buttons just created in the for-loop listing cartProducts

  for (let i = 0; i < delButtons.length; i++) {
    delButtons[i].addEventListener("click", () => {
      delButtons[i].parentElement.remove(); // When the button is clicked it removes its parent elemnet in the DOM
      shoppingCart.splice(i, 1); // and removes corresponding item in the shoppingCart array.
      updateCart();
    });
  }
}

// Making all product buttons work when clicked.
for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function (event) {
    let product = event.target.parentNode.getAttribute("data-product");
    if (shoppingCart.includes(product)) {
      // Checking if product is allready in cart
      alert("is already in cart");
    } else {
      shoppingCart.push(product);
      updateCart();
      listProductsInCart();
    }
  });
}
