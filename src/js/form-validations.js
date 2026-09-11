const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-zА-Яа-яЇїІіЄєҐґ]+$/;

function validateEmail(value) {
  return emailRegex.test(value);
}

function validatePhone(value) {
  return phoneRegex.test(value);
}

function validateName(value) {
  return value.length > 2 && nameRegex.test(value);
}

function validateComment(value) {
  return value.length > 16;
}

export function validateInputs(element) {
  let isValid = true;
  let errorMsg = '';

  switch (element.name) {
    case 'name':
      isValid = validateName(element.value.trim());
      errorMsg = '*Name must be at least 3 letters';
      break;
    case 'tel':
      isValid = validatePhone(element.value.trim());
      errorMsg = '*Format: +380XXXXXXXXX';
      break;
    case 'email':
      isValid = validateEmail(element.value.trim());
      errorMsg = '*Please enter a valid email';
      break;
    case 'comment':
      isValid = validateComment(element.value.trim());
      errorMsg = '*Comment must be longer than 16 symbols';
      break;
    case 'accept':
      isValid = element.checked;
      errorMsg = '*Please check the terms';
      break;
  }

  return {
    isValid,
    errorMsg,
  };
}
