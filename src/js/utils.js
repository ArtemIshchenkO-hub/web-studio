export function showError({ input, errorEl, btn, errorMsg }) {
  input.classList.add('is-invalid');
  errorEl.textContent = errorMsg;
  errorEl.classList.add('is-show');
  btn.disabled = true;
}

export function hideError({ input, errorEl, btn }) {
  input.classList.remove('is-invalid');
  errorEl.textContent = '';
  errorEl.classList.remove('is-show');
  btn.disabled = false;
}

export function showAndResetFormData(form, data) {
  alert(`${JSON.stringify(data)}`);
  form.reset();
}
