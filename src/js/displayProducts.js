// Function for fetching data from the api and storing it into localStorage
function fetchData() {
  // If localStorage contains the data it will be returned immediately
  if (localStorage.getItem('products') !== null) {
    return new Promise((resolve, reject) =>
      resolve(JSON.parse(localStorage.getItem('products')))
    );
  }

  // If it does not contain it will fetch the data from the api and store it in the localStorage
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('products', JSON.stringify(json));
      return json;
    });
}

// Function for displaying products
const displayProducts = function (
  category,
  section1,
  section2,
  section3,
  section1Div,
  section2Div,
  section3Div
) {
  // It will filter the data into the categories
  const innerProducts = fetchData().then(data =>
    data.filter(el => el.category === category)
  );

  // After dividing it into the categories, it will divide it into the types of categories
  const section1Arr = innerProducts.then(data =>
    data.filter(el => el.title.toLowerCase().includes(section1))
  );
  const section2Arr = innerProducts.then(data =>
    data.filter(el => el.title.toLowerCase().includes(section2))
  );
  const section3Arr = innerProducts.then(data =>
    data.filter(el => el.title.toLowerCase().includes(section3))
  );

  // Getting the sections for the products and clearing them
  let divSection1 = document.querySelector(section1Div);
  let divSection2 = document.querySelector(section2Div);
  let divSection3 = document.querySelector(section3Div);
  divSection1.innerHTML = divSection2.innerHTML = divSection3.innerHTML = '';

  // Looping through the data that have been divided into the types and creating new element for each of them
  section1Arr.then(data =>
    data.forEach(element => {
      divSection1.insertAdjacentHTML(
        'afterbegin',
        ` 
            <div class="product">
                <img style="height:200px" src="${element.image}" alt="" />
                <p>${element.title}</p>
                <p>$${element.price}</p>
                <button class="addToCart" data-id=${element.id}>Add to Cart</button>
            </div>`
      );
    })
  );

  section2Arr.then(data =>
    data.forEach(element => {
      divSection2.insertAdjacentHTML(
        'afterbegin',
        ` 
              <div class="product">
                  <img style="height:200px" src="${element.image}" alt="" />
                  <p>${element.title}</p>
                  <p>$${element.price}</p>
                  <button class="addToCart" data-id=${element.id}>Add to Cart</button>
              </div>`
      );
    })
  );

  section3Arr.then(data =>
    data.forEach(element => {
      divSection3.insertAdjacentHTML(
        'afterbegin',
        ` 
              <div class="product">
                  <img style="height:200px" src="${element.image}" alt="" />
                  <p>${element.title}</p>
                  <p>$${element.price}</p>
                  <button class="addToCart" data-id=${element.id}>Add to Cart</button>
              </div>`
      );
    })
  );
};
