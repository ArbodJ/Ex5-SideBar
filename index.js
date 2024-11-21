// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const section = document.querySelector(".content");
const sideBar = document.getElementById("side-bar");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  sideBar.classList.toggle("back");
});

section.addEventListener("click", () => {
  sideBar.classList.remove("back");
});
