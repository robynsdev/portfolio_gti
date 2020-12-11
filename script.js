const toggle = document.getElementsByClassName("toggle");
const navLinks = document.querySelectorAll(".nav-link");

toggle.addEventListener("click", () => {
  toggle.classList.add("active");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    removeActiveClasses();
    navLink.classList.add("active");
  });
});

function removeActiveClasses() {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
}
