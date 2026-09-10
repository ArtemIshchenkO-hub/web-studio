import { refs } from './refs';

export function openModal() {
  refs.modal.classList.add('is-open');
}

export function closeModal({ target, currentTarget }) {
  if (!target.closest('.close-btn') && target !== currentTarget) {
    return;
  }

  refs.modal.classList.remove('is-open');
}
