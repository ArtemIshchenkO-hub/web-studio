const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-zА-Яа-яЇїІіЄєҐґ]+$/;

export function validateEmail(value) {
  return emailRegex.test(value);
}

export function validatePhone(value) {
  return phoneRegex.test(value);
}

export function validateName(value) {
  return value.length > 2 && nameRegex.test(value);
}

export function validateComment(value) {
  return value.length > 16;
}
