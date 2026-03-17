"use strict";
const params = new URLSearchParams(window.location.search);
let category = params.get("category");

let heroImage = document.querySelector("#heroImage");

let overview = document.querySelector(".overview");

if (category === "womens-dresses" || category === "womens-shoes" || category === "womens-watches") {
  heroImage.src = "../img/womenswearhero.webp";
} else if (category === "mens-shirts" || category === "mens-shoes" || category === "mens-watches") {
  heroImage.src = "../img/menswearhero.webp";
} else if (category === "furniture") {
  heroImage.src = "../img/homeinteriorhero.webp";
}

//======================================================================================================================
let categoryLinks = "";
if (category === "womens-dresses" || category === "womens-shoes" || category === "womens-watches") {
  categoryLinks = `<div class="subcategoryLinks">
  <a href="productlist.html?category=womens-dresses">Dresses</a>
  <a href="productlist.html?category=womens-shoes">Shoes</a>
  <a href="productlist.html?category=womens-watches">Watches</a>
  </div>
  `;
} else if (category === "mens-shirts" || category === "mens-shoes" || category === "mens-watches") {
  categoryLinks = `<div class="subcategoryLinks">
  <a href="productlist.html?category=mens-shirts">Shirts</a>
  <a href="productlist.html?category=mens-shoes">Shoes</a>
  <a href="productlist.html?category=mens-watches">Watches</a>
  `;
} else if (category === "furniture") {
  categoryLinks = "";
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

  overview.innerHTML = categoryLinks;

  productsArr.products.forEach((product) => {
    console.log("product", product.id);
    productContainer.innerHTML += `
            <div class="card pastelhover">
              <img src="${product.thumbnail}" alt="blå sofa med hvid baggrund" />
              <p class="price">${product.price},- DKK </p>
              <p class="productInfo">${product.title}</p>
              <a class="showMore" href="product.html?id=${product.id}">Vis mere</a>
            </div>
      
      `;
  });
}
