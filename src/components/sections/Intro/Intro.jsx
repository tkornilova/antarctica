import "./Intro.scss";
import introImage from "../../../assets/images/intro.jpg";

export const Intro = () => {
  return (
    <section className="page-section intro" id="intro">
      <div className="container">
        <div className="intro__wrapper">
          <h2 className="title">Путешествие на край Земли</h2>
          <p className="text">
            Это волшебное путешествие поможет вам познакомиться поближе с
            удивительным миром Антарктики. Наш круизный лайнер отвезет вас на
            край Земли, где вы сможете увидеть: ледяные айсберги, несколько
            видов пингвинов, китов, морских котиков и многое другое.
          </p>
        </div>

        <div className="intro__img">
          <img src={introImage} alt="Пингвины" width="560" height="301" />
        </div>
      </div>
    </section>
  );
};
