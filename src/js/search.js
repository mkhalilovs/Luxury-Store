// Storing all data in a list
fetchData().then(data => {
  data.forEach(e => {
    document.getElementById('list').insertAdjacentHTML(
      'afterbegin',
      `<li class="results">
              <img src="${e.image}" alt="result img" />
              <p>${e.title}</p>
              <p>$${e.price}</p>
              <button class="addToCart" data-id=${e.id}>Add to Cart</button>
              <hr>
              <br>
            </li>`
    );
  });
});

function searchProduct() {
  fetchData().then(data => {
    // Getting the input value which is typed into the search bar
    let input = document.querySelector('.search').value;
    // Lowercasing it
    input = input.toLowerCase();
    // Getting all results in the unordered list
    let result = document.querySelectorAll('.results');

    // Looping through the items
    for (i = 0; i < data.length; i++) {
      // If the item is not the match it will not be shown
      if (!result[i].innerHTML.toLowerCase().includes(input)) {
        result[i].style.display = 'none';
      } else {
        // Else it will be displayed
        document.getElementById('list').style.display = 'block';
        result[i].style.display = 'flex';
      }
    }
  });
}

// If user clicks anywhere else than Add to Cart button the popup result container will not be shown
const btnAddOnly = document.querySelector('.addToCart');

window.onclick = function (event) {
  if (event.target.className === btnAddOnly.className) return;
  document.getElementById('list').style.display = 'none';
};
