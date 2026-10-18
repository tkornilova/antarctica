import { Header } from "../../components/base/Header/Header";
import { Welcome } from "../../components/sections/Welcome/Welcome";
import { Intro } from "../../components/sections/Intro/Intro";
import { Advantages } from "../../components/sections/Advantages/Advantages";
import { Offers } from "../../components/sections/Offers/Offers";
import { Booking } from "../../components/sections/Booking/Booking";
import { FindUs } from "../../components/sections/FindUs/FindUs";
import { Footer } from "../../components/base/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Intro />
        <Advantages />
        <Offers />
        <Booking />
        <FindUs />
      </main>
      <Footer />
    </>
  );
};
