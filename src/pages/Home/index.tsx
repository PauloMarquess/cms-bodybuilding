import Header from "../../components/organism/Header";
import Mission from "../../components/organism/Mission";
import Plans from "../../components/organism/Plans";
import Presentation from "../../components/organism/Presentation";

const Home = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Mission />
      <Plans />
    </div>
  );
};

export default Home;
