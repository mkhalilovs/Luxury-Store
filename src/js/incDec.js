const incButton = document.querySelectorAll('.increase');
const decButton = document.querySelectorAll('.decrease');

// If the + button is pressed the item quantity will be increased and stored in the localStorage
for (let i = 0; i < incButton.length; i++) {
  incButton[i].addEventListener('click', function (event) {
    cartItems.forEach(item => {
      if (Number(event.target.dataset.id) === item.id) {
        item.quantity++;

        // Getting the element for Quantity and changing it
        document.getElementById(
          event.target.dataset.id
        ).innerHTML = `Quantity: ${item.quantity}`;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        cartItems = JSON.parse(localStorage.getItem('cartItems'));
      }
    });
    cartQty = cartItems.map(cartItem => cartItem.quantity);
    cartCount.innerHTML = cartQty.reduce((acc, cur) => acc + cur, 0);
  });
}

// If the - button is pressed the item quantity will be decreased and stored in the localStorage
for (let i = 0; i < decButton.length; i++) {
  decButton[i].addEventListener('click', function (event) {
    cartItems.forEach(item => {
      if (Number(event.target.dataset.id) === item.id) {
        // If the item quantity is more than 1 it will get decreased until it reaches to 0
        if (item.quantity > 1) {
          item.quantity--;

          // Getting the element for Quantity and changing it
          document.getElementById(
            event.target.dataset.id
          ).innerHTML = `Quantity: ${item.quantity}`;
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          cartItems = JSON.parse(localStorage.getItem('cartItems'));
        } else {
          // When it is less than 1 the item will be deleted from the array and localStorage
          cartItems.splice(cartItems.indexOf(item), 1);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          cartItems = JSON.parse(localStorage.getItem('cartItems'));
          mainCart.innerHTML = '';

          cartItems.forEach(item => {
            mainCart.insertAdjacentHTML(
              'afterbegin',
              ` <div class="cart-div-product">
                            <img
                            src="${item.image}"
                            alt=""
                            />
                            <div class="cart-details">
                                <p>Product: ${item.title}</p>
                                <p>Price: $${item.price}</p>
                                <p id="${item.id}">Quantity: ${item.quantity}</p>
                                <div class="cart-buttons">
                                <button class="increase" data-id="${item.id}">Increase count</button>
                                <button class="decrease" data-id="${item.id}">Decrease count</button>
                                    <button class="delete-btn" data-id="${item.id}">Delete</button>
                                </div>
                            </div>
                        </div>
                        <hr class="cart-hr" />`
            );
          });
          window.location.reload();
        }
      }
      cartQty = cartItems.map(cartItem => cartItem.quantity);
      cartCount.innerHTML = cartQty.reduce((acc, cur) => acc + cur, 0);
    });
  });
}
