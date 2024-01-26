//selecting DOM element
const menu = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const closeIcon = document.querySelector(".close-icon");
const lis = document.querySelectorAll(".navbar li");

// add event listener
menu.addEventListener("click", showNavbar);
closeIcon.addEventListener("click", hidNavbar);
lis.forEach((li) => {
  li.addEventListener("click", hidNavbar);
});

// function to show nav bar
function showNavbar() {
  navbar.classList.add("block");
}

// function to hid nav bar
function hidNavbar() {
  navbar.classList.remove("block");
}
