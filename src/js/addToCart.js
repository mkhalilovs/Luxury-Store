const product = document.querySelectorAll('.product');

let cartItems = [];

// Checking if the localStorage has the data
if (localStorage.getItem('cartItems') !== null) {
  // If yes fetching the data from localStorage
  cartItems = JSON.parse(localStorage.getItem('cartItems'));
} else {
  // Else a new key and value will be created in the localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Getting the total items from the cart and displaying it in the cart sign
const cartCount = document.getElementById('product-count');

let cartQty = cartItems.map(item => item.quantity);
cartCount.innerHTML = cartQty.reduce((acc, cur) => acc + cur, 0);

const btnAdd = document.querySelectorAll('.addToCart');
for (let i = 0; i < btnAdd.length; i++) {
  btnAdd[i].addEventListener('click', function (event) {
    if (!event.target.dataset.id) return;

    fetchData().then(data => {
      // Looping through the data
      for (const product of data) {
        // If the ids match the the item will be pushed into the array and qty will be 1
        if (Number(event.target.dataset.id) === product.id) {
          // The next loop will determine if the array contains the item, if it does it will not be pushed but the qty will be increased
          for (const cartItem of cartItems) {
            if (Number(event.target.dataset.id) === cartItem.id) {
              cartItem.quantity++;
              localStorage.setItem('cartItems', JSON.stringify(cartItems));
              return;
            }
          }
          cartItems.push(product);
          product.quantity = 1;
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
      }
    });
    cartQty = cartItems.map(item => item.quantity);
    cartCount.innerHTML = cartQty.reduce((acc, cur) => acc + cur, 0);
  });
}

cartItems = JSON.parse(localStorage.getItem('cartItems'));
