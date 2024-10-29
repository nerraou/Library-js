// First approach

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item != question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// Second approach

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   console.log(btn.parentElement.parentElement);
//   const question = btn.parentElement.parentElement;

//   btn.addEventListener("click", () => {
//     question.classList.toggle("show-text");
//   });
// });
