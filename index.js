"use strict";

const themeStyle = document.getElementById("themeStyle");
const themeDots = document.getElementsByClassName("theme__dot");

const theme = localStorage.getItem("theme");

if (theme === null) {
  setTheme("light");
} else {
  setTheme(theme);
}

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    const mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode === "light") {
    themeStyle.href = "./css/varDefault.css";
  }
  if (mode === "blue") {
    themeStyle.href = "./css/varBlue.css";
  }
  if (mode === "green") {
    themeStyle.href = "./css/varGreen.css";
  }
  if (mode === "purple") {
    themeStyle.href = "./css/varPurple.css";
  }

  localStorage.setItem("theme", mode);
}
