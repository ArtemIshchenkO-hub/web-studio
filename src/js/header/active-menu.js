import { refs } from '../refs';

export function initActiveMenu() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }

        refs.menuLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      });
    },
    {
      rootMargin: '-20% 0px -20% 0px',
    }
  );

  refs.sections.forEach(section => {
    observer.observe(section);
  });
}
