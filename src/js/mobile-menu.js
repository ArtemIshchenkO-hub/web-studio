import { refs } from './refs';

export function openMenu() {
  refs.mobileMenu.classList.add('is-open');
}

export function closeMenu({ target }) {
  if (
    !target.closest('.close-btn') &&
    !target.classList.contains('mobile-menu-link')
  ) {
    return;
  }

  refs.mobileMenu.classList.remove('is-open');
}
