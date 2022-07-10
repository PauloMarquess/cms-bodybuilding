import Header from "../../components/organism/Header";
import Mission from "../../components/organism/Mission";
import Plans from "../../components/organism/Plans";
import Presentation from "../../components/organism/Presentation";
import { Footer } from "../../components/organism/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Presentation />
      <Mission />
      <Plans />
      <Footer />
    </>
  );
};

export default Home;
