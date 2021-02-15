const themeStyle = document.getElementById('themeStyle');
const themeDots = document.getElementsByClassName('theme__dot');

const theme = localStorage.getItem('theme');

const setTheme = (mode) => {
  switch (mode) {
    case 'light':
      themeStyle.href = './css/varDefault.css';
      break;
    case 'blue':
      themeStyle.href = './css/varBlue.css';
      break;
    case 'green':
      themeStyle.href = './css/varGreen.css';
      break;
    case 'purple':
      themeStyle.href = './css/varPurple.css';
      break;
    default:
      themeStyle.href = './css/varDefault.css';
  }

  localStorage.setItem('theme', mode);
};

setTheme(theme);

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    const mode = this.dataset.mode;
    setTheme(mode);
  });
}
