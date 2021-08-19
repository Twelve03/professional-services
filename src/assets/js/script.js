// Toggle menu
function navToggle() {
  const nav = document.getElementById("menu");
  const mask = document.getElementById("mask");
  // Close drop-downs before oppening the menu
  const dropDowns = document.querySelectorAll(".dropdown");
  dropDowns.forEach((option) => option.classList.add("hidden"));

  nav.classList.toggle("hidden");
  mask.classList.toggle("hidden");
}

// Scroll to top
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Change header colors and show Scroll-To-Top button
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (
    document.documentElement.scrollTop ||
    document.body.scrollTop > window.innerHeight
  ) {
    header.classList.remove("bg-opacity-0");
    header.classList.add("shadow-md");
    menuBtn.classList.add("text-black");
    menuBtn.classList.remove("text-white");
    navLinks.classList.remove("md:text-white");
    navLinks.classList.add("md:text-black");
    scrollTopBtn.classList.remove("hidden");
  } else {
    header.classList.add("bg-opacity-0");
    header.classList.remove("shadow-md");
    menuBtn.classList.remove("text-black");
    menuBtn.classList.add("text-white");
    navLinks.classList.add("md:text-white");
    navLinks.classList.remove("md:text-black");
    scrollTopBtn.classList.add("hidden");
  }
});

function dropDown(a) {
  const dropDowns = document.querySelectorAll(".dropdown");
  const array = Array.prototype.slice.call(dropDowns);

  // Show mask when a drop-down is open, so we can click it to close it
  const mask = document.getElementById("mask");
  mask.classList.remove("hidden");

  // Don't show 2 drop-downs at the same time
  array.forEach((option) => {
    if (array.indexOf(option) == a) {
      // Show the one we are clicking on.
      option.classList.toggle("hidden");
    } else {
      // Close the rest.
      option.classList.add("hidden");
    }
  });
}
