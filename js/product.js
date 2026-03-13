"use strict";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// definer istedet productContainer med passende id/class
const productContainer = document.querySelector("#productContainer");

fetch(`https://dummyjson.com/products?category=${id}`)
  .then((response) => response.json())
  .then((data) => {
    // indsæt evt andet navn end productcontainer og indsæt html
    productContainer.innerHTML = ``;
  });
//   .then((response) => response.json())
//   .then((data) => {
//     showProducts(data);
//   });

// hvis vi vil have en tilbage-knap, skal der indsætter id/class
document.querySelector("").addEventListener("click", goBack);
function goBack() {
  history.back();
}
