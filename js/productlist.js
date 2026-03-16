"use strict";
const params = new URLSearchParams(window.location.search);
let category = params.get("category");

let heroImage = document.querySelector("#heroImage");

if (category === "womens-dresses" || category === "womens-shoes" || category === "womens-watches") {
  heroImage.src = "../img/womenswearhero.webp";
} else if (category === "mens-shirts" || category === "mens-shoes" || category === "mens-watches") {
  heroImage.src = "../img/menswearhero.webp";
} else if (category === "furniture") {
  heroImage.src = "../img/homeinteriorhero.webp";
}

//======================================================================================================================

fetch(`https://dummyjson.com/products/category/${category}?limit=10`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data.discountPercentage) data.realPrice = Math.ceil(data.price - (data.price / 100) * data.discountPercentage);
    data.products.forEach((product) => {
      if (product.discount) {
        product.realPrice = Math.ceil(product.price - (product.price / 100) * product.discountPercentage);
      } else {
        product.realPrice = product.price;
      }
    });

    showProducts(data);
  });

const productContainer = document.querySelector(".productContainer");

function showProducts(productsArr) {
  console.log("productsArr", productsArr);
  heroImage.innerHTML = `<h1>${category}</h1>`;

  productsArr.products.forEach((product) => {
    console.log("product", product.id);

    productContainer.innerHTML += `

            <div class="card pastelhover">
              <img src="${product.thumbnail}" alt="blå sofa med hvid baggrund" />
              <p class="price">${product.price} DKK</p>
              <p class="productInfo">${product.title}</p>
              <a class="showMore" href="product.html?id=${product.id}">Vis mere</a>
            </div>
      
      `;
  });
}
