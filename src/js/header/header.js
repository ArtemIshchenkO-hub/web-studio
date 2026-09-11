import { refs } from '../refs';

let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > lastScrollY;

  const shouldHide =
    scrollingDown && currentScrollY > refs.headerEl.offsetHeight;

  refs.headerEl.classList.toggle('is-hidden', shouldHide);

  lastScrollY = currentScrollY;
  ticking = false;
}

export function animateHeader() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(updateHeader);
  }
}
