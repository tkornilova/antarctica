import "./NotFound.scss";

import { Header } from "../../components/base/Header/Header";
import { Footer } from "../../components/base/Footer/Footer";

import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <section className="page-section not-found">
          <div className="container">
            <div className="page-description">
              <h1 className="title">Кажется, мы сбились с курса</h1>
              <p className="text">
                Похоже, эта страница затерялась среди льдов Антарктики. Но не переживайте — мы поможем вам вернуться на правильный маршрут.
              </p>
              <Link to="/" className="link">
                Перейти на главную страницу
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
