import { validateInputs } from './form-validations';
import { hideError, showError, showAndResetFormData } from './utils';

function validateField(element) {
  if (element.nodeName === 'BUTTON' || element.type === 'submit') return true;

  const { isValid, errorMsg } = validateInputs(element);

  if (!isValid) {
    showError(element, errorMsg);
  } else {
    hideError(element);
  }

  return isValid;
}

export function handleInputValidation({ target }) {
  if (target.nodeName === 'BUTTON') return;

  validateField(target);
}

export function focusInputHandler({ target }) {
  if (target.nodeName === 'BUTTON') return;

  hideError(target);
}

export function handleModalSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const elements = [...form.elements].filter(
    el => el.nodeName !== 'BUTTON' && el.type !== 'submit'
  );

  let isValid = true;
  elements.forEach(element => {
    const isFieldValid = validateField(element);
    if (!isFieldValid) isValid = false;
  });

  if (!isValid) return;

  const { name, tel, email, comment } = form.elements;
  const formData = {
    name: name.value.trim(),
    phone: tel.value.trim(),
    email: email.value.trim(),
    comment: comment.value.trim(),
  };

  showAndResetFormData(form, formData);
}

export function handleFooterSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const emailInput = form.elements.email;

  const isValid = validateField(emailInput);
  if (!isValid) return;

  const formData = { email: emailInput.value.trim() };
  showAndResetFormData(form, formData);
}
