console.log("connected");
const productSection = document.querySelector("main section");
const API_URL = "http://localhost:3000/api/v1/products";

//when the page loads we invoke the function that makes the ajax request to get data
getProducts();
function getProducts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(products => {
      console.log(products);
      products.forEach(product => {
        const cardDiv = document.createElement("div");
        productSection.appendChild(cardDiv);
        cardDiv.outerHTML = `<div class="card col-sm-4 mt-4">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <a href="/product.html?id=${
            product.id
          }" class="btn btn-outline-primary">View Product</a>
        </div>
      </div>`;
      });
    });
}
