const btn = document.querySelector(".btn");
const back = document.querySelector("body");

btn.addEventListener("click", (event) => {
  back.classList.toggle("theme");
});
