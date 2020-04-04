
const hamburger = document.querySelector(".menu-btn");
const navbar =document.querySelector(".nav");

hamburger.addEventListener("click", () =>  {
    navbar.classList.toggle("active");
});