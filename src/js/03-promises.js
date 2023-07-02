import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(evt.target.delay.value);
  let step = Number(evt.target.step.value);
  let amount = Number(evt.target.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success('Fulfilled promise ${position} in ${delay}ms');
        }, delay);
      })
        .catch(({ position, delay }) => {
          setTimeout(() => {
            Notify.failure('Rejected promise ${position} in ${delay}ms');
          }, delay);
        });
      delay += step;
    }
  
    evt.currentTarget.reset();
  }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const objPromise = { position, delay };
  
    return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(objPromise);
      }
      reject(objPromise);
    });
  }
