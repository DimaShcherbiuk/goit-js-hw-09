const formSubmit = document.querySelector('form.feedback-form');
let email = document.querySelector('[name="email"]');
let message = document.querySelector('[name="message"]');

formSubmit.addEventListener('input', handlerInput);
formSubmit.addEventListener('submit', handlerSubmit);

let value = localStorage.getItem('feedback-form-state');

if (value) {
  let data = JSON.parse(value);
  email.value = data.email;
  message.value = data.message;
} else {
}

function handlerInput(event) {
  event.preventDefault();

  const feedbackForm = {
    email: email.value,
    message: message.value,
  };
  let jsn = JSON.stringify(feedbackForm);
  localStorage.setItem('feedback-form-state', jsn);
}

function handlerSubmit(event) {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Будь ласка, заповніть усі поля форми перед збереженням.');
    return;
  }
  let data = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(
    `Об'єкт feedback-form-state:\n email: ${data.email} \n message: ${data.message}`
  );

  email.value = '';
  message.value = '';

  localStorage.removeItem('feedback-form-state');
}
