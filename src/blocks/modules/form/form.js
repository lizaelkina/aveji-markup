const form = document.querySelector('.form');
const buttonForm = form.querySelector('.form__btn')
const feedback = document.querySelector('.feedback');
const feedbackSubtitle = feedback.querySelector('.feedback__subtitle');
const feedbackMessage = feedback.querySelector('.feedback__message');

function showInputError(inputElement, errorElement) {
  inputElement.classList.add('form__input_type_error');
  errorElement.classList.add('form__input-error_active');
}

function hideInputError(inputElement, errorElement) {
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
}

function toggleBtnState (buttonElement, isActive) {
  if (isActive) {
    buttonElement.disabled = false;
    buttonElement.classList.remove('form__btn_disabled');
  } else {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add('form__btn_disabled');
  }
}

function checkInputValidity(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  const isInputValid = inputElement.validity.valid;

  if (isInputValid) {
    hideInputError(inputElement, errorElement);
  } else {
    showInputError(inputElement, errorElement);
  }
}

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__btn');
  toggleBtnState(buttonElement, false);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleBtnState(buttonElement, formElement.checkValidity());
    });
  });
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => setEventListeners(formElement));
}

enableValidation();

function reactToRequest() {
  feedbackSubtitle.classList.add('feedback__subtitle_inactive');
  feedbackMessage.classList.add('feedback__message_active');
  buttonForm.classList.add('form__btn_disabled');
  setTimeout(() => {
    feedbackSubtitle.classList.remove('feedback__subtitle_inactive');
    feedbackMessage.classList.remove('feedback__message_active');
  }, 2000);
}

function sendRequest(event, formElement) {
  event.preventDefault();
  form.reset();
  reactToRequest();
}

form.addEventListener('submit', sendRequest);