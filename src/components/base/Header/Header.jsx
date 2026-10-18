import "./Header.scss";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo logo">
          <svg width="75" height="41" aria-hidden="true">
            <use href={`${import.meta.env.BASE_URL}icons.svg#logo-icon`} />
          </svg>
        </div>
        <nav
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          aria-label="Основная навигация"
          id="main-navigation"
        >
          <button
            className="header__button"
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className="header__list">
            <li className="header__item">
              <a
                className="header__link link link--accent"
                href="#advantages"
                onClick={handleLinkClick}
              >
                Преимущества
              </a>
            </li>
            <li className="header__item">
              <a
                className="header__link link link--accent"
                href="#offers"
                onClick={handleLinkClick}
              >
                Ближайшие круизы
              </a>
            </li>
            <li className="header__item">
              <a
                className="header__link link link--accent"
                href="#booking"
                onClick={handleLinkClick}
              >
                Бронирование
              </a>
            </li>
            <li className="header__item">
              <a
                className="header__link link link--accent"
                href="#find-us"
                onClick={handleLinkClick}
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
