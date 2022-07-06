import Header from "../../components/organism/Header";
import Mission from "../../components/organism/Mission";
import Plans from "../../components/organism/Plans";
import Presentation from "../../components/organism/Presentation";
import { Footer } from "../../components/organism/Footer";
import { Clients } from "../../components/organism/Clients";

const Home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Mission />
      <Plans />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
