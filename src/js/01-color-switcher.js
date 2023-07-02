const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let intervalId = null;

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', cancelChangeColor);

stopBtn.disabled = true;

  function changeColor() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    intervalId = setInterval(() => {
      bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }

  function cancelChangeColor() {
    stopBtn.disabled = true;
    startBtn.disabled = false;

    clearInterval(intervalId);
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }