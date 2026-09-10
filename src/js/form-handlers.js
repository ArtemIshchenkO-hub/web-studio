import {
  validateEmail,
  validatePhone,
  validateName,
  validateComment,
} from './form-validations';
import { showError, hideError, showAndResetFormData } from './utils';

export function handleInputValidation({ target, currentTarget }) {
  if (target.name === 'accept') {
    return;
  }

  const fieldContainer =
    target.closest('.modal-form-field') ||
    target.closest('.footer-form-input-wrapper');

  const errorEl = fieldContainer?.querySelector('.error-message');
  const btn = currentTarget.querySelector('[data-form-btn]');

  if (!errorEl) return;

  let isValid = true;
  let errorMsg = '';

  switch (target.name) {
    case 'name':
      isValid = validateName(target.value.trim());
      errorMsg = 'Name must be at least 3 letters';
      break;
    case 'tel':
      isValid = validatePhone(target.value.trim());
      errorMsg = 'Format: +380XXXXXXXXX';
      break;
    case 'email':
      isValid = validateEmail(target.value.trim());
      errorMsg = 'Please enter a valid email';
      break;
    case 'comment':
      isValid = validateComment(target.value.trim());
      errorMsg = 'Comment must be longer than 16 symbols';
      break;
  }

  if (!isValid && target.value.trim() !== '') {
    showError({ input: target, errorEl, btn, errorMsg });
  } else {
    hideError({ input: target, errorEl, btn });
  }
}

export function handleFooterSubmit(event) {
  event.preventDefault();
  const currentTarget = event.currentTarget;

  const email = currentTarget.elements.email.value.trim();

  if (!validateEmail(email)) {
    return;
  }

  const formData = { email };
  showAndResetFormData(currentTarget, formData);
}

export function handleModalSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { name, tel, email, comment, accept } = form.elements;

  const isFormValid =
    validateName(name.value.trim()) &&
    validatePhone(tel.value.trim()) &&
    validateEmail(email.value.trim()) &&
    validateComment(comment.value.trim());

  if (!isFormValid) {
    alert('Please fill all fields correctly');
    return;
  }

  if (!accept.checked) {
    alert('Please check a terms');
    return;
  }

  const formData = {
    name: name.value.trim(),
    phone: tel.value.trim(),
    email: email.value.trim(),
    comment: comment.value.trim(),
  };

  showAndResetFormData(form, formData);
}
