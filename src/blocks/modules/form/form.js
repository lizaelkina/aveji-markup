const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('form__input_error');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('form__input_error');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};

// Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid);