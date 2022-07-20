import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// ---------------------------------

const buttonOpen = document.querySelector('.page-header__button-open');
const buttonClose = document.querySelector('.page-header__button-close');
const pageHeader = document.querySelector('.page-header');
const navigation = document.querySelector('.page-header__wrapper');
const body = document.querySelector('body');
let navLinkArray = Array.from(document.querySelectorAll('.page-header__item'));

if (pageHeader.classList.contains('page-header-no-js')) {
  pageHeader.classList.remove('page-header-no-js');
  pageHeader.classList.add('page-header--closed');
  buttonOpen.classList.remove('visually-hidden');
  buttonClose.classList.add('visually-hidden');
}

buttonOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  buttonOpen.classList.add('visually-hidden');
  buttonClose.classList.remove('visually-hidden');
  pageHeader.classList.remove('page-header--closed');
  pageHeader.classList.add('page-header--opened');
  body.style.overflow = 'hidden';
  navigation.style.overflow = 'scroll';
  body.classList.toggle('body-overlay');
});

buttonClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  buttonClose.classList.add('visually-hidden');
  buttonOpen.classList.remove('visually-hidden');
  pageHeader.classList.remove('page-header--opened');
  pageHeader.classList.add('page-header--closed');
  body.style.overflow = 'auto';
  navigation.style.overflow = 'auto';
  body.classList.toggle('body-overlay');
});

navLinkArray.forEach((value) => {
  value.addEventListener('click', () => {
    buttonClose.classList.add('visually-hidden');
    buttonOpen.classList.remove('visually-hidden');
    pageHeader.classList.remove('page-header--opened');
    pageHeader.classList.add('page-header--closed');
    body.style.overflow = 'auto';
    body.classList.toggle('body-overlay');
  });
});

const form = document.querySelector('.booking__form');
const nameInput = form.querySelector('.booking__form-name');
const phoneInput = form.querySelector('.booking__form-phone');
const emailInput = form.querySelector('.booking__form-email');

form.addEventListener('submit', () => {
  if (nameInput.value !== '' && phoneInput.value !== '' && emailInput.value !== '') {
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('phone', phoneInput.value);
    localStorage.setItem('email', emailInput.value);
  } else {
    form.reportValidity();
  }
});
