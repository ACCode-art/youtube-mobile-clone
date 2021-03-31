const viewComments = document.querySelector(".viewComments");
const overlay = document.querySelector(".overlay");
const exit = document.querySelector(".exit");

viewComments.addEventListener("click", () => {
  overlay.classList.toggle("show");
});

exit.addEventListener("click", () => {
  overlay.classList.toggle("show");
});
