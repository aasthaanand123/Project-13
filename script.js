const hamburger = document.querySelector(".hamburger__two");
const cross = document.querySelector(".cross");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const toggle = function () {
  hamburger.classList.toggle("none");
  menu.classList.toggle("transition");
  cross.classList.toggle("none");
  overlay.classList.toggle("none");
};
hamburger.addEventListener("click", toggle);
cross.addEventListener("click", toggle);
overlay.addEventListener("click", toggle);
