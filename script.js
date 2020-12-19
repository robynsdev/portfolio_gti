const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");

console.log(burger.classList == "fas fa-bars");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active-menu");
  if (burger.classList == "active") {
    burger.classList.remove("fa-bars");
    burger.classList.add("fa-times");
  } else {
    burger.classList.remove("fa-times");
    burger.classList.add("fa-bars");
  }
});

// fas fa-times
