import "./Offers.scss";
import { Cruise } from "../../blocks/Cruise/Cruise";

import cruise1Img from "../../../assets/images/cruises/cruise-1.jpg";
import cruise2Img from "../../../assets/images/cruises/cruise-2.jpg";
import cruise3Img from "../../../assets/images/cruises/cruise-3.jpg";
import cruise4Img from "../../../assets/images/cruises/cruise-4.jpg";
import cruise5Img from "../../../assets/images/cruises/cruise-5.jpg";
import cruise6Img from "../../../assets/images/cruises/cruise-6.jpg";
import cruise7Img from "../../../assets/images/cruises/cruise-7.jpg";
import cruise8Img from "../../../assets/images/cruises/cruise-8.jpg";

const cruisesData = [
  {
    id: 1,
    img: cruise1Img,
    name: "Астория",
    route: ["Аргентина", "Фолклендские острова", "Антарктида"],
    departure: "Ушуайя",
    duration: "11 дней",
    price: "11500",
  },
  {
    id: 2,
    img: cruise2Img,
    name: "Элайн",
    route: ["Аргентина", "Фолклендские острова", "Антарктида", "Чили"],
    departure: "Буэнос-Айрес",
    duration: "20 дней",
    price: "14500",
  },
  {
    id: 3,
    img: cruise3Img,
    name: "Атлантис",
    route: [
      "Аргентина",
      "Южная Георгия и Южные Сандвичевы Острова",
      "Антарктида",
    ],
    departure: "Ушуайя",
    duration: "15 дней",
    price: "14500",
  },
  {
    id: 4,
    img: cruise4Img,
    name: "Одиссей",
    route: ["Чили", "Антарктида"],
    departure: "Пунта-Аренас",
    duration: "13 дней",
    price: "9700",
  },
  {
    id: 5,
    img: cruise5Img,
    name: "Олимпия",
    route: ["Аргентина", "Фолклендские острова", "Южная Георгия", "Антарктида"],
    departure: "Ушуайя",
    duration: "21 день",
    price: "18600",
  },
  {
    id: 6,
    img: cruise6Img,
    name: "Аврора",
    route: ["Аргентина", "Антарктида", "Чили"],
    departure: "Ушуайя",
    duration: "14 дней",
    price: "11700",
  },
  {
    id: 7,
    img: cruise7Img,
    name: "Леонор",
    route: ["Чили", "Южная Георгия", "Антарктида", "Аргентина"],
    departure: "Пунта-Аренас",
    duration: "17 дней",
    price: "12500",
  },
  {
    id: 8,
    img: cruise8Img,
    name: "Минион - 1",
    route: ["Аргентина", "Антарктида"],
    departure: "Ушуайя",
    duration: "11 дней",
    price: "12300",
  },
];

export const Offers = () => {
  return (
    <section className="page-section offers" id="offers">
      <div className="container">
        <h2 className="title">Ближайшие круизы</h2>

        <ul className="offers__list">
          {cruisesData.map((item) => (
            <li key={item.id} className="offers__item">
              <Cruise
                img={item.img}
                name={item.name}
                route={item.route}
                departure={item.departure}
                duration={item.duration}
                price={item.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
