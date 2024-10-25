const showButtonElement = document.querySelector(".button");
const hideButtonElement = document.querySelector(".close-btn");

const modalOverlayElement = document.querySelector(".modal-overlay");

showButtonElement.addEventListener("click", () => {
  console.log("hello world");
  modalOverlayElement.classList.add("open-modal");
});

hideButtonElement.addEventListener("click", () => {
  modalOverlayElement.classList.remove("open-modal");
});
