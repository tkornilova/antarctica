import "./Booking.scss";
import { Form } from "../../blocks/Form/Form";

export const Booking = () => {
  return (
    <section className="page-section booking" id="booking">
      <div className="container">
        <div className="booking__wrapper">
          <h2 className="title">Раннее бронирование</h2>
          <p className="text">
            Забронируйте тур за 3-6 месяцев до даты выезда и сэкономьте до 50%
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
};
