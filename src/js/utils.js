export function getErrorElement(input) {
  const fieldContainer =
    input.closest('.modal-form-field') ||
    input.closest('.modal-field') ||
    input.closest('.footer-form-input-wrapper');

  return fieldContainer?.querySelector('.error-message');
}

export function showError(element, errorMsg) {
  const errorEl = getErrorElement(element);

  element.classList.add('is-invalid');
  errorEl.textContent = errorMsg;
  errorEl.classList.add('is-show');
}

export function hideError(element) {
  const errorEl = getErrorElement(element);

  element.classList.remove('is-invalid');
  errorEl.textContent = '';
  errorEl.classList.remove('is-show');
}

export function showAndResetFormData(form, data) {
  alert(`${JSON.stringify(data)}`);
  form.reset();
}
