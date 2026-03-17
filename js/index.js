const heroCategories = document.querySelector("#heroCategories");

fetch("https://dummyjson.com/products/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach(() => {
      heroCategories.innerHTML = `
      <a href="productlist.html?category=furniture">Home Interior</a>
          <a href="productlist.html?category=mens-shirts">Mens Apparel</a>
          <a href="productlist.html?category=womens-dresses">Womens Apparel</a>`;
    });
  });
