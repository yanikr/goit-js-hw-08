import throttle from 'lodash.throttle';
const form = document.querySelector('form');

let feedback = {};
form.addEventListener('submit', handleSubmit);
form.addEventListener('input', throttle(handleInput, 500));
function handleSubmit(event) {
  event.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}

function handleInput(event) {
  feedback[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}
