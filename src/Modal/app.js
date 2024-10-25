const showButtonElement = document.querySelector(".button");
const hideButtonElement = document.querySelector(".close-btn");

const modalOverlayElement = document.querySelector(".modal-overlay");
const modalContainerElement = document.querySelector(".modal-container");

showButtonElement.addEventListener("click", () => {
  modalOverlayElement.classList.add("open-modal");
});

hideButtonElement.addEventListener("click", () => {
  modalOverlayElement.classList.remove("open-modal");
});

modalContainerElement.addEventListener("click", (e) => {
  e.stopPropagation();
});

modalOverlayElement.addEventListener("click", () => {
  modalOverlayElement.classList.remove("open-modal");
});
