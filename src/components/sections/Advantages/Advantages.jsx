import "./Advantages.scss";

const advantagesData = [
  {
    id: 1,
    icon: {
      name: "ship-1-icon",
      width: "27",
      height: "32",
    },
    title: "Небольшой круизный лайнер",
    description:
      "Круизный лайнер, рассчитанный всего лишь на 300 гостей, поможет избежать шума и очередей и даст возможность насладиться видами и природой.",
  },
  {
    id: 2,
    icon: {
      name: "check-icon",
      width: "38",
      height: "21",
    },
    title: "Удобная система все включено",
    description:
      "Все наши круизы работают по системе “Все Включено”. Великолепные блюда и безлимитный бар доступны для вас 24 часа.",
  },
  {
    id: 3,
    icon: {
      name: "ship-2-icon",
      width: "42",
      height: "15",
    },
    title: "Экскурсионные туры на Zodiac",
    description:
      "Экскурсионные туры к берегам Антарктиды совершаются         на оборудованных лодках типа Zodiac в сопровождении опытных экскурсоводов.",
  },
];

export const Advantages = () => {
  return (
    <section className="page-section advantages" id="advantages">
      <div className="container">
        <h2 className="title">Почему выбирают нас</h2>
        <ul className="advantages__list">
          {advantagesData.map((item) => (
            <li key={item.id} className="advantages__item">
              <div className="advantages__wrapper">
                <svg
                  width={item.icon.width}
                  height={item.icon.height}
                  aria-hidden="true"
                >
                  <use
                    href={`${import.meta.env.BASE_URL}icons.svg#${item.icon.name}`}
                  />
                </svg>
              </div>
              <h3 className="subtitle">{item.title}</h3>
              <p className="text">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
