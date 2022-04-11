let buttonOpen = document.querySelector('.page-header__button-open');
let buttonClose = document.querySelector('.page-header__button-close');
let pageHeader = document.querySelector('.page-header');

if (pageHeader.classList.contains('page-header-no-js')) {
  pageHeader.classList.remove('page-header-no-js');
  pageHeader.classList.add('page-header--closed');
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
