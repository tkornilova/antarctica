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

let buttonOpen = document.querySelector('.page-header__button-open');
let buttonClose = document.querySelector('.page-header__button-close');
let pageHeader = document.querySelector('.page-header');

if (pageHeader.classList.contains('page-header-no-js')) {
  pageHeader.classList.remove('page-header-no-js');
  pageHeader.classList.add('page-header--closed');
  buttonOpen.classList.remove('visually-hidden');
  buttonClose.classList.add('visually-hidden');
}

buttonOpen.addEventListener('click', function () {
  buttonOpen.classList.add('visually-hidden');
  buttonClose.classList.remove('visually-hidden');
  pageHeader.classList.remove('page-header--closed');
  pageHeader.classList.add('page-header--opened');
});

buttonClose.addEventListener('click', function () {
  buttonClose.classList.add('visually-hidden');
  buttonOpen.classList.remove('visually-hidden');
  pageHeader.classList.remove('page-header--opened');
  pageHeader.classList.add('page-header--closed');
});

const form = document.querySelector('.booking__form');
const nameInput = form.querySelector('.booking__form-name');
const phoneInput = form.querySelector('.booking__form-phone');
const emailInput = form.querySelector('.booking__form-email');

form.addEventListener('submit', (evt) => {
  if (!nameInput.value || !phoneInput.value || !emailInput.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('phone', phoneInput.value);
    localStorage.setItem('email', emailInput.value);
  }
});
