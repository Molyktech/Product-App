const product_id = getIdFromQuery();
const productDiv = document.querySelector("main section");

getProduct(product_id);
function getProduct(id) {
  return fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(product => showProduct(product));
}

function showProduct(product) {
  const buttons = `
    <a
      href="./edit.html?id=${product.id}"
      class="btn btn-primary"
    >
      Edit Product
    </a>
  `;
  addProductToPage(product, 12, buttons, productDiv);
}
