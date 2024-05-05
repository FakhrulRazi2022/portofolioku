// Style Switcher Toggler
const styleSwitchToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitchToggle.addEventListener("click", () => {
  styleSwitcher.classList.toggle("open");
});

// Menyembunyikan style switcher ketika scroll
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

// Warna tema
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Tema terang & gelap
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// Skill Item Click
const skillItems = document.querySelectorAll(".skill-item");

skillItems.forEach((item) => {
  item.addEventListener("click", () => {
    skillItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});
