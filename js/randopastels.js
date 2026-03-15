"use strict";
const randomPastels = ["green-pastel", "yellow-pastel", "purple-pastel"];

const pastelElements = document.querySelectorAll(".pastelhover");

pastelElements.forEach((element) => {
  addEventListener("mouseover", () => {
    element.classList.remove(...randomPastels);
    const randomIndex = Math.floor(Math.random() * randomPastels.length);
    const randomPastel = randomPastels[randomIndex];
    element.classList.add(randomPastel);
  });
});

element.addEventListener("mouseleave", () => {
  element.classList.remove(...randomPastels);
});
