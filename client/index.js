console.log("connected");
const productSection = document.querySelector("main section");

//when the page loads we invoke the function that makes the ajax request to get data
getProducts();
function getProducts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(products => {
      console.log(products);
      products.forEach(product => {
        const buttons = `
          <a
            href="./product.html?id=${product.id}"
            class="btn btn-outline-primary"
          >
            View Product
          </a>
        `;
        addProductToPage(product, 4, buttons, productSection);
      });
    });
}
