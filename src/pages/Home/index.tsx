import Header from "../../components/organism/Header";
import Mission from "../../components/organism/Mission";
import Plans from "../../components/organism/Plans";
import Presentation from "../../components/organism/Presentation";
import { Footer } from "../../components/organism/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Mission />
      <Plans />
      <Footer />
    </div>
  );
};

export default Home;
