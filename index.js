let barsIcon = document.querySelector("header .bars");
let mobileMenu = document.querySelector(".mobile .nav-menu");

barsIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
