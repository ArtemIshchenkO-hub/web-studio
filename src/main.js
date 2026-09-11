import { refs } from './js/refs';
import { closeMenu, openMenu } from './js/mobile-menu';
import { closeModal, openModal } from './js/modal';
import {
  focusInputHandler,
  handleFooterSubmit,
  handleInputValidation,
  handleModalSubmit,
} from './js/form-handlers';

refs.burgerMenuBtn.addEventListener('click', openMenu);
refs.mobileMenu.addEventListener('click', closeMenu);
refs.orderBtn.addEventListener('click', openModal);
refs.modal.addEventListener('click', closeModal);

refs.footerForm.addEventListener('focusout', handleInputValidation);
refs.footerForm.addEventListener('focusin', focusInputHandler);
refs.footerForm.addEventListener('submit', handleFooterSubmit);

refs.modalForm.addEventListener('focusout', handleInputValidation);
refs.modalForm.addEventListener('focusin', focusInputHandler);
refs.modalForm.addEventListener('submit', handleModalSubmit);
