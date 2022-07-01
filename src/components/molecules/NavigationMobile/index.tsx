import { useState } from "react";
import { icons } from "../../../assets";
import ModalMenu from "../ModalMenu";
import { CardMobile } from "./style";

const NavigationMobile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <CardMobile>
      <button onClick={handleModal}>
        <img src={icons.menu} />
      </button>
      {modalVisible && <ModalMenu handleModal={handleModal} />}
    </CardMobile>
  );
};

export default NavigationMobile;
