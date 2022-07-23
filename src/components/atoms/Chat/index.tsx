import Lottie from "react-lottie";
import Animation from "../../../assets/animation/animation-whatsapp.json";
import { CardWhatsapp } from "./style";

const Chat = () => {
  return (
    <CardWhatsapp>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: Animation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width="100%"
      />
    </CardWhatsapp>
  );
};

export default Chat;
