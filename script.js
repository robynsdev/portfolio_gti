const toggle = document.getElementById("burger");
const menu = document.querySelector(".menu");

console.log(toggle);

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active-menu");
});

// fas fa-times