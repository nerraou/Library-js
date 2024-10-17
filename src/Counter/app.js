let count = 0;

const resultElement = document.querySelector(".result");
const buttonsElements = document.querySelectorAll(".button");

buttonsElements.forEach((button) => {
  button.addEventListener("click", (e) => {
    const classes = e.currentTarget.classList;

    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      resultElement.style.color = "#90ee90";
    } else if (count < 0) {
      resultElement.style.color = "#e2142b";
    } else {
      resultElement.style.color = "black";
    }
    resultElement.textContent = count;
  });
});
