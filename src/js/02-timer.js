import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const calendar = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let currentDate = new Date();
let selectedDate = null;
let deltaDate = null;
let intervalId = null;

startBtn.disabled = true;
startBtn.addEventListener('click', startTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    deltaDate = selectedDate - currentDate;

    if (selectedDate <= currentDate) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(calendar, options);

function startTimer() {
  intervalId = setInterval(() => {
  selectedDate = options.onClose.selectedDates[0];
  deltaDate = selectedDate - currentDate;
  const time = convertMs(deltaDate);
  updateTimer(time);
  }, 1000);
  startBtn.disabled = true;
  stopTimer()
}

function stopTimer() {
  if (daysEl.textContent === '00' &&
    hoursEl.textContent === '00' &&
    minutesEl.textContent === '00' &&
    secondsEl.textContent === '00') {
  clearInterval(intervalId);
  startBtn.disabled = false;
}
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
 function addLeadingZero(value) {
return String(value).padStart(2,"0");
  }

  function updateTimer({ days, hours, minutes, seconds }) {
    daysEl.textContent = days.toString();
    hoursEl.textContent = hours.toString();
    minutesEl.textContent = minutes.toString();
    secondsEl.textContent = seconds.toString();
  }
