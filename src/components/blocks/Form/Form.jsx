import "./Form.scss";

export const Form = () => {
  return (
    <form action="#" className="form">
      <p className="text">
        Оставьте заявку и мы свяжемся с вами в ближайшее время
      </p>

      <div className="form__wrapper">
        <label className="visually-hidden" htmlFor="name">
          Имя
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          placeholder="Имя"
          autoComplete="name"
          required
        />

        <label className="visually-hidden" htmlFor="phone">
          Телефон
        </label>
        <input
          className="form__input"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Телефон"
          autoComplete="tel"
          required
        />

        <label className="visually-hidden" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          autoComplete="email"
          required
        />

        <label className="form__agreement" htmlFor="agreement">
          <input
            className="form__checkbox"
            type="checkbox"
            id="agreement"
            name="agreement"
            required
          />
          <span>Я согласен на обработку моих персональных данных</span>
        </label>
      </div>

      <button className="form__button button button--framed" type="submit">
        Забронировать
      </button>
    </form>
  );
};
