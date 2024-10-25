const sidebarElement = document.querySelector(".sidebar");
const toggleButtonElement = document.querySelector(".sidebar-toggle");
const closeButtonElement = document.querySelector(".close-btn");

toggleButtonElement.addEventListener("click", () => {
  sidebarElement.classList.toggle("show-sidebar");
});

closeButtonElement.addEventListener("click", () => {
  sidebarElement.classList.remove("show-sidebar");
});
