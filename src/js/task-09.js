const buttonRef = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorValue = document.querySelector('.color');

buttonRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  bodyEl.style.background = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
