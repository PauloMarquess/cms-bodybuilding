import { icons } from "../../../assets";
import { navigation } from "../../../locale/ptBr";
import { ButtonClose, ModalCard } from "./style";

const ModalMenu = ({ setModalVisible, modalVisible }: any) => {
  const exitModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <ModalCard>
      <ButtonClose onClick={exitModal}>
        <img src={icons.close} alt="imagem de X" />
      </ButtonClose>
      <nav onClick={exitModal}>
        {navigation.map((nav) => (
          <a key={nav.name} href={nav.link}>
            {nav.name}
          </a>
        ))}
      </nav>
    </ModalCard>
  );
};

export default ModalMenu;
