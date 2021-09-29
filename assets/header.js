// Handles opening of the megamenu
console.log("Header JS LOADED!");
var megamenu__overlay = document.querySelector(".megamenu__overlay");

var openBtn = document
  .querySelector(".header__menu")
  .addEventListener("click", openMenu);

var closeBtn = document.querySelector(".megamenu__times").addEventListener("click", closeMenu);  

// When hamburger icon is clicked
function openMenu() {
  console.log("OPEN MENU TRIGGERED");
  // Toggle megamenu to display
  document.getElementById("megamenu__overlay").style.display = "flex";
}

function closeMenu() {
  console.log("CLOSE MENU TRIGGERED");
  // Toggle megamenu to hide
  document.querySelector(".megamenu__overlay").style.display = "none";
}
