import "./Cruise.scss";

export const Cruise = (cruiseData) => {
  return (
    <div className="cruise">
      <h3 className="cruise__title">Круиз {cruiseData.name}</h3>
      <img
        className="cruise__img"
        src={cruiseData.img}
        alt={`Круиз ${name}`}
        width={260}
        height={386}
      />
      {
        <div className="cruise__wrapper">
          <p className="cruise__name">Круиз {cruiseData.name}</p>
          <div className="cruise__description">
            <div className="cruise__data">
              <span className="cruise__label">Маршрут</span>
              <p className="cruise__value">{cruiseData.route.join(" - ")}</p>
            </div>
            <div className="cruise__data">
              <span className="cruise__label">Порт отправления</span>
              <p className="cruise__value">{cruiseData.departure}</p>
            </div>
            <div className="cruise__data">
              <span className="cruise__label">Продолжительность</span>
              <p className="cruise__value">{cruiseData.duration}</p>
            </div>
            <div className="cruise__data">
              <span className="cruise__label">Цена</span>
              <p className="cruise__value">от {cruiseData.price} $</p>
            </div>
          </div>
          <a className="cruise__button button button--framed" href="#booking">
            Забронировать
          </a>
        </div>
      }
    </div>
  );
};
