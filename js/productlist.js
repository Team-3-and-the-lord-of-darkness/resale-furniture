"use strict";
const params = new URLSearchParams(window.location.search);
let category = params.get("category") ?? "Home";

let leData;

// document.querySelector(".asc").addEventListener("click", klikSorterAsc);
// document.querySelector(".des").addEventListener("click", klikSorterDes);
// function klikSorterAsc(evt) {
//   console.log("KLIK SORTER", evt.target.dataset.direction);
//   leData.sort(function (a, b) {
//     return a.realPrice - b.realPrice;
//   });
//   showProducts(leData);
// }
// function klikSorterDes(evt) {
//   console.log("KLIK SORTER", evt.target.dataset.direction);
//   leData.sort(function (a, b) {
//     return b.realPrice - a.realPrice;
//   });
//   showProducts(leData);
// }

fetch(`https://dummyjson.com/products?category=${category}&limit=10`)
  .then((response) => response.json())
  .then((data) => {
    if (product.discountPercentage) data.realPrice = Math.ceil(product.price - (product.price / 100) * product.discountPercentage);
    data.forEach((product) => {
      if (product.discount) {
        product.realPrice = Math.ceil(product.price - (product.price / 100) * product.discountPercentage);
      } else {
        product.realPrice = product.price;
      }
    });
    leData = data;

    showProducts(leData);
  });

// husk at sætte class eller id til her!
// const productContainer = document.querySelector();

function showProducts(productsArr) {
  // console.log("productsArr", productsArr);
  document.querySelector("#heading").innerHTML = `<h1>${category}</h1>`;
  productContainer.innerHTML = "";

  productsArr.forEach((product) => {
    console.log("product", product.id);

    // sæt hardcode html her i:
    productContainer.innerHTML += ``;
  });
}
