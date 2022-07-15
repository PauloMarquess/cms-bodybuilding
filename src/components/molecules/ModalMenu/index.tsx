import { icons } from "../../../assets";
import { navigation } from "../../../__mocks__";
import { ChangeLanguage } from "../../../components";
import { ButtonClose, Header, ModalCard } from "./style";

const ModalMenu = ({ setModalVisible, modalVisible }: any) => {
  const exitModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <ModalCard>
      <Header onClick={exitModal}>
        <ChangeLanguage />
        <ButtonClose src={icons.close} alt="imagem de X" />
      </Header>
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
