import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const calendar = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('button[data-start]');

// const daysEl = document.querySelector('[data-days]');
// const hoursEl = document.querySelector('[data-hours]');
// const minutesEl = document.querySelector('[data-minutes]');
// const secondsEl = document.querySelector('[data-seconds]');

// let currentDate = null;
// let selectedDate = null;
// let deltaDate = null;
// let intervalId = null;

// startBtn.disabled = true;
// startBtn.addEventListener('click', startTimer);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     selectedDate = selectedDates[0];
//     currentDate = Date.now();
//     deltaDate = selectedDate - currentDate;

//     if (selectedDate <= currentDate) {
//       Notify.failure('Please choose a date in the future');
//       return;
//     }
//     else {
//       startBtn.disabled = false;
//     }
//   },
// };

// const datePicker = flatpickr(calendar, options);

// function startTimer() {
//   intervalId = setInterval(() => {
//   selectedDate = datePicker.selectedDates[0].getTime();
//   currentDate = Date.now();
//   deltaDate = selectedDate - currentDate;
//   const time = convertMs(deltaDate);
//   updateTimer(time);
//   calendar.disabled = true;
//   if (deltaDate < 1000) {
//     stopTimer();
//   }
//   }, 1000);
//   startBtn.disabled = true;
//   // calendar.disabled = false;
//   }

// function stopTimer() {
//   if (daysEl.textContent === '00' &&
//     hoursEl.textContent === '00' &&
//     minutesEl.textContent === '00' &&
//     secondsEl.textContent === '00') {
//   clearInterval(intervalId);
//   startBtn.disabled = false;
// }
// }

// function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     const days = addLeadingZero(Math.floor(ms / day));
//     const hours = addLeadingZero(Math.floor((ms % day) / hour));
//     const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//     const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
//     return { days, hours, minutes, seconds };
//   }
  
//  function addLeadingZero(value) {
// return String(value).padStart(2,"0");
//   }

//   function updateTimer({ days, hours, minutes, seconds }) {
//     daysEl.textContent = days.toString();
//     hoursEl.textContent = hours.toString();
//     minutesEl.textContent = minutes.toString();
//     secondsEl.textContent = seconds.toString();
//   }


// const categroyList = document.querySelector('.category-list');
const refs = {
  categoryList: document.querySelector('.category-list'),
  categoryContainer: document.querySelector('.category-container'),
  allCategoryButton: document.querySelector('.all-category-button'),
};

import axios from 'axios';

const CATEGORIE_URL ='https://tasty-treats-backend.p.goit.global/api/categories';

export async function fetchCategories() {
  try{
    const categories = await axios.get(CATEGORIE_URL);
    
    return categories.data;

  }catch(error){
    console.log(error);
  };
};


// function fillCategoriesList() {
//      fetchCategories()
//     .then(({_id, name}) =>
//     renderCategoriesList({_id, name}))
//     .catch(error => {console.log(error);
//     Notify.failure('Something went wrong. Please try again');})
// };


// fillCategoriesList();


async function renderCategoriesList() {
  try { 
    const arrMk = await  fetchCategories();
    // console.log(arrMk);
    const markup = arrMk
    .map(evt => {
      return `<li class='cat-items'>
      <button class='category-btn' value = ${evt._id}>${evt.name}</button>
    </li>`}).join('');
  refs.categoryList.innerHTML = markup;
} catch (error) {
  console.error("Error:", error);
}

}

renderCategoriesList();
//////

///////
refs.categoryContainer.addEventListener('click', onBtnCLick);

let lastClickedBtn = null;


function onBtnCLick(event) {
  const Btn = event.target;

  if (Btn.nodeName !== 'BUTTON') {
    return;
  }

  if (lastClickedBtn) {
    lastClickedBtn.classList.remove('active');
  }

  if (Btn === refs.allCategoryButton) {
    removeActiveClassFromAllButtons();
  } else {
    refs.allCategoryButton.classList.remove('active');
  }

  Btn.classList.add('active');
  lastClickedBtn = Btn;
};


function removeActiveClassFromAllButtons() {
  const buttons = refs.categoryList.querySelectorAll('button');

  buttons.forEach(button => {
    button.classList.remove('active');
  });
};


refs.categoryList.addEventListener('click', event => {
  if (!event.target.classList.contains('category-btn')) {
    event.stopPropagation();
  }
});

const recipesList = document.querySelector('.recipes-list');

refs.categoryList.addEventListener('click', handleCategoryCards);

function handleCategoryCards() {
  event => {
    if (!event.target.value.contains('category-btn')) {
      event.stopPropagation();
    }
  }
}

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes?{id}';
const ID_CARDS_URL ='/recipes/{id}';

export async function fetchIdCards() {
  try{
    const idCard = await axios.get(BASE_URL);
    console.log(idCard);
    return idCard.data;
    

  }catch(error){
    console.log(error);
  };
};

fetchIdCards().then(data => data.map((data) => {
console.log(data.results.category)}))