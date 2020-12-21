const THEME_DEFAULT = 'light';
if (!localStorage.getItem('themeColor')) {
  localStorage.setItem('themeColor', THEME_DEFAULT);
}

colorize(localStorage.getItem('themeColor'));

function setTheme(themeColor) {
  localStorage.setItem('themeColor', themeColor);

  colorize(themeColor);
}

function colorize(themeColor) {
  const body = document.querySelector('#body');
  const className = `theme--${themeColor}`;

  body.classList.remove('theme--light', 'theme--dark');
  body.classList.add(className);
}