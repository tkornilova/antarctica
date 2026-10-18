import "./FindUs.scss";
import { Map } from "../../blocks/Map/Map";

export const FindUs = () => {
  return (
    <section className="page-section find-us" id="find-us">
      <div className="container">
        <h2 className="visually-hidden">Как нас найти</h2>
        <Map />

        <div className="find-us__content">
          <p className="find-us__text text">
            У вас ещё остались вопросы или сомнения? Приезжайте к нам в офис и
            мы вам все расскажем.
          </p>

          <div className="find-us__contact">
            <svg
              className="find-us__icon"
              width="18"
              height="22"
              aria-hidden="true"
            >
              <use href={`${import.meta.env.BASE_URL}icons.svg#pin-icon`} />
            </svg>
            <address className="find-us__address text">
              г. Санкт Петербург, ул. Большая Конюшенная, 19/8
            </address>
          </div>

          <div className="find-us__contact">
            <svg
              className="find-us__icon"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <use href={`${import.meta.env.BASE_URL}icons.svg#phone-icon`} />
            </svg>
            <a href="tel:88002000000" className="find-us__phone link text">
              8-800-200-00-00
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
