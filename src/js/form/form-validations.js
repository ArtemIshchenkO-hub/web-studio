const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex =
  /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’-]+(?: [A-Za-zА-Яа-яЇїІіЄєҐґ'’-]+)*$/;

function validateEmail(value) {
  return emailRegex.test(value);
}

function validatePhone(value) {
  return phoneRegex.test(value);
}

function validateName(value) {
  return value.length >= 3 && nameRegex.test(value);
}

function validateComment(value) {
  return value.length > 16;
}

export function validateInputs(element) {
  const value = element.value.trim();

  let validator;
  let errorMsg;
  let isValid;

  switch (element.name) {
    case 'name':
      validator = validateName;
      errorMsg = 'Name must be at least 3 letters';
      break;
    case 'tel':
      validator = validatePhone;
      errorMsg = 'Format: +380XXXXXXXXX';
      break;
    case 'email':
      validator = validateEmail;
      errorMsg = 'Please enter a valid email';
      break;
    case 'comment':
      validator = validateComment;
      errorMsg = 'Comment must be longer than 16 symbols';
      break;
    case 'accept':
      isValid = element.checked;

      return {
        isValid,
        errorMsg: isValid ? '' : 'Please check the terms',
      };

    default:
      return {
        isValid: true,
        errorMsg: '',
      };
  }

  isValid = validator(value);

  return {
    isValid,
    errorMsg: isValid ? '' : errorMsg,
  };
}
