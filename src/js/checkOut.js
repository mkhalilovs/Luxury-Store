const checkOutBtn = document.querySelector('.btn-checkout');
const allProducts = document.querySelectorAll('.cart-div-product');
const allHr = document.querySelectorAll('.cart-hr');

// After checkout all the products will be removed and the array will be cleared
checkOutBtn.addEventListener('click', function () {
  for (const productElement of allProducts) {
    productElement.remove();
  }
  for (const hrElement of allHr) {
    hrElement.remove();
  }
  localStorage.setItem('cartItems', JSON.stringify([]));
  checkOutBtn.classList.add('hidden');
  mainCart.insertAdjacentHTML(
    'afterbegin',
    `<div class="success-msg"> 
      <p>Thanks for your purchase!</p> 
      <br> 
      <a href="../../index.html">Go back</a>
    </div>`
  );
});
