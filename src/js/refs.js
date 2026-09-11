export const refs = {
  headerEl: document.querySelector('#header'),
  burgerMenuBtn: document.querySelector('.header-burger-menu-btn'),
  orderBtn: document.querySelector('[data-order-btn]'),

  footerForm: document.querySelector('.footer-form'),
  modalForm: document.querySelector('.modal-form'),

  modal: document.querySelector('.overlay'),
  mobileMenu: document.querySelector('.mobile-menu'),

  menuLinks: document.querySelectorAll('.header-nav-list a[href^="#"]'),
  sections: document.querySelectorAll('section[id]'),
};
