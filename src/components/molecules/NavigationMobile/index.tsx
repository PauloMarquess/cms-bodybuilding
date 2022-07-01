import { useState } from "react";
import { icons } from "../../../assets";
import { CardMobile } from "./style";

const NavigationMobile = () => {
  const [visible, setVisible] = useState(false);
  const handleModal = () => {
    setVisible(!visible);
  };

  return (
    <CardMobile>
      <a>
        <img src={icons.menu} />
      </a>
    </CardMobile>
  );
};

export default NavigationMobile;
