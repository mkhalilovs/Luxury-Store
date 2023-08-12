const mainCart = document.getElementById('mainCart');

cartItems = JSON.parse(localStorage.getItem('cartItems'));

// If cartItems does not contain any items it will show as No Products in the page
if (cartItems.length < 1) {
  document.querySelector('.cart-div').classList.remove('hidden');
  document.querySelector('.btn-checkout').classList.add('hidden');
} else {
  // Else the message will be hidden and the items will be shown
  document.querySelector('.cart-div').classList.add('hidden');
}

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
        <button class="increase" data-id="${item.id}">+</button>
        <button class="decrease" data-id="${item.id}">-</button>
        <button class="delete-btn" data-id="${item.id}">Delete</button>
                </div>
                </div>
                </div>
                <hr class="cart-hr" />`
  );
});

const deleteBtn = document.querySelectorAll('.delete-btn');

// Delete button will get the id from dataset of the button if it matches it will be deleted from the array
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function (event) {
    cartItems.filter((item, i) => {
      if (Number(event.target.dataset.id) === item.id) {
        cartItems.splice(i, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }
    });

    console.log(cartItems);

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
                          <button class="increase" data-id="${item.id}">+</button>
                          <button class="decrease" data-id="${item.id}">-</button>
                              <button class="delete-btn" data-id="${item.id}">Delete</button>
                          </div>
                      </div>
                  </div>
                  <hr class="cart-hr" />`
      );
    });

    window.location.reload();
  });
}
