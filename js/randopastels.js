"use strict";
const randomPastels = [".green-pastel", ".yellow-pastel", ".purple-pastel"];

console.log("HEJ FRA PASTREL", document.querySelector(".pastelhover"));

const pastelElements = document.querySelectorAll(".pastelhover");
setTimeout(addPastels, 1000);

function addPastels() {
  console.log("DEAV");
  pastelElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.remove(...randomPastels);
      console.log("OVER");
      const randomIndex = Math.floor(Math.random() * randomPastels.length);
      const randomPastel = randomPastels[randomIndex];
      element.classList.add(randomPastel);
    });

    element.addEventListener("mouseleave", () => {
      element.classList.remove(...randomPastels);
    });
  });
}
