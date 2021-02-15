"use strict";

const themeStyle = document.getElementById("themeStyle");

const theme = localStorage.getItem("theme");

if (theme === null) {
  setTheme("light");
} else {
  setTheme(theme);
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
