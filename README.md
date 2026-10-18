# **Antarctica — круизы в Антарктику**

Адаптивный лендинг для презентации круизов в Антарктику. Проект знакомит пользователей с особенностями путешествий, преимуществами круизов, доступными маршрутами и условиями раннего бронирования.

## **Демо**

[Открыть демо](https://tkornilova.github.io/antarctica/)

## **Стек**

- React
- React Router
- JavaScript (ES6+)
- SCSS
- Vite
- Yandex Maps API
- ESLint
- Prettier

## **Реализовано**

- адаптивная вёрстка для desktop, tablet и mobile;
- навигация по секциям страницы;
- мобильное меню с анимацией бургера;
- презентация преимуществ круизов;
- карточки круизов с информацией о маршрутах, портах отправления, продолжительности и стоимости;
- переход к форме бронирования из карточек круизов;
- форма заявки с валидацией обязательных полей;
- интерактивная карта с помощью Yandex Maps API;
- отдельная страница 404;
- SVG-спрайт для иконок;
- состояния `hover` и `focus-visible`;
- базовая accessibility-разметка;
- ESLint и Prettier для проверки и форматирования кода.

## **Структура проекта**

```text
src/
├── assets/
│   ├── fonts/
│   └── images/
│       └── cruises/
├── components/
│   ├── base/
│   │   ├── Header/
│   │   └── Footer/
│   ├── blocks/
│   │   ├── Cruise/
│   │   ├── Form/
│   │   └── Map/
│   └── sections/
│       ├── Advantages/
│       ├── Booking/
│       ├── FindUs/
│       ├── Intro/
│       ├── Offers/
│       └── Welcome/
├── pages/
│   ├── Home/
│   └── NotFound/
├── styles/
│   ├── fonts.scss
│   ├── global.scss
│   ├── normalize.scss
│   └── variables.scss
├── App.jsx
├── index.scss
└── main.jsx
```