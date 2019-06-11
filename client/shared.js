//all pages can access this js file
//store for general fucntions

const API_URL = "http://localhost:3000/api/v1/products";

function getIdFromQuery() {
  const id = window.location.search.match(/\?id=([0-9]+)/);
  return id[1];
}

function addProductToPage(product, size, buttons, parent) {
  const cardDiv = document.createElement("div");
  parent.appendChild(cardDiv);
  cardDiv.outerHTML = `<div class="card col-sm-${size} mt-4">
    <img src="${product.image}" class="card-img-top" alt="${product.title}">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
      <p class="card-text">$${product.price}</p>
      <p class="card-text">${product.quantity} left in stock</p>
      ${buttons}
    </div>
  </div>`;
}
