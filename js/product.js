"use strict";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const randomPastels = ["green-pastel", "yellow-pastel", "purple-pastel"];

const productContainer = document.querySelector(".productContainer");

fetch(`https://dummyjson.com/products/${id}`)
  .then((response) => response.json())
  .then((id) => {
    // indsæt evt andet navn end productcontainer og indsæt html
    const newsection = document.createElement("section");
    newsection.innerHTML = `
    <section class="grid2">
          <div>
            <img src="${id.thumbnail}" alt="" />
          </div>
          <div>
            <h1>${id.title}</h1>
            <h1>${id.price},- DKK</h1>
            <p class="discountPercentage">Save ${id.discountPercentage}%</p>

            <button class="buy pastelhover"><h1>[add to cart]</h1></button>
          </div>
        </section>
        <section class="infoSection">
          <h1>${id.brand}</h1>
          <p>${id.description}</p>
          <p>${id.dimensions}</p>
        </section>`;

    productContainer.appendChild(newsection);
    document.querySelector(".pastelhover").addEventListener("mouseover", (evt) => {
      const element = evt.currentTarget;
      console.log("OVER", element);
      element.classList.remove(...randomPastels);
      const randomIndex = Math.floor(Math.random() * randomPastels.length);
      const randomPastel = randomPastels[randomIndex];
      element.classList.add(randomPastel);
    });
  });
// productContainer.innerHTML = `
// <section class="grid2">
//       <div>
//         <img src="${id.thumbnail}" alt="" />
//       </div>
//       <div>
//         <h1>${id.title}</h1>
//         <h1>${id.price},- DKK</h1>
//         <p class="discountPercentage">Save ${id.discountPercentage}%</p>

//         <button class="buy pastelhover"><h1>[add to cart]</h1></button>
//       </div>
//     </section>
//     <section class="infoSection">
//       <h1>${id.brand}</h1>
//       <p>${id.description}</p>
//       <p>${id.dimensions}</p>
//     </section>`;
// });
//   .then((response) => response.json())
//   .then((data) => {
//     showProducts(data);
//   });

// hvis vi vil have en tilbage-knap, skal der indsætter id/class
// document.querySelector("").addEventListener("click", goBack);
// function goBack() {
//   history.back();
