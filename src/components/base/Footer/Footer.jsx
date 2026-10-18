import "./Footer.scss";

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <button
          className="footer__button button button--footer"
          type="button"
          onClick={handleScrollToTop}
        >
          К началу
        </button>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
              aria-label="Открыть наш Facebook"
            >
              <svg width="11" height="20" aria-hidden="true">
                <use
                  href={`${import.meta.env.BASE_URL}icons.svg#facebook-icon`}
                />
              </svg>
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
              aria-label="Открыть наш Instagram"
            >
              <svg width="20" height="20" aria-hidden="true">
                <use
                  href={`${import.meta.env.BASE_URL}icons.svg#instagram-icon`}
                />
              </svg>
            </a>
          </li>
          <li className="footer__item">
            <a
              href="#"
              className="footer__link link"
              aria-label="Открыть наш Twitter"
            >
              <svg width="20" height="16" aria-hidden="true">
                <use
                  href={`${import.meta.env.BASE_URL}icons.svg#twitter-icon`}
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
