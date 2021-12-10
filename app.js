const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const openbtn = question.querySelector(".plus-btn");
  openbtn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("newadd");
      }
      question.classList.toggle("newadd");
    });
  });
});
