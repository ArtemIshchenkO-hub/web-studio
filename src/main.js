import { refs } from './js/refs';
import { closeMenu, openMenu } from './js/mobile-menu';
import { closeModal, openModal } from './js/modal';
import {
  handleFooterSubmit,
  handleInputValidation,
  handleModalSubmit,
} from './js/form-handlers';

refs.burgerMenuBtn.addEventListener('click', openMenu);
refs.mobileMenu.addEventListener('click', closeMenu);
refs.orderBtn.addEventListener('click', openModal);
refs.modal.addEventListener('click', closeModal);
refs.footerForm.addEventListener('blur', handleInputValidation, true);
refs.footerForm.addEventListener('submit', handleFooterSubmit);
refs.modalForm.addEventListener('blur', handleInputValidation, true);
refs.modalForm.addEventListener('submit', handleModalSubmit);
