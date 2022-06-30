import { useState } from "react";
import { CardMobile } from "./style";

const NavigationMobile = () => {
  const [visible, setVisible] = useState(false);
  const handleModal = () => {
    setVisible(!visible);
  };

  return (
    <CardMobile>
      {/* <Lottie
        options={{
          loop: false,
          autoplay: false,
          animationData: Animation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width="25px"
      /> */}
    </CardMobile>
  );
};

export default NavigationMobile;
