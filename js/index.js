const btnLight = document.querySelector('#btn--light');
const btnDark = document.querySelector('#btn--dark');

btnLight.addEventListener('click', () => {
  setTheme('light');
});
btnDark.addEventListener('click', () => {
  setTheme('dark');
});