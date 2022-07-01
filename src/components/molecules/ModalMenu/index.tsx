import { icons } from "../../../assets";
import { navigation } from "../../../locale/ptBr";
import { ButtonClose, ModalCard } from "./style";

const ModalMenu = ({ handleModal }: any) => {
  return (
    <ModalCard>
      <ButtonClose onClick={handleModal}>
        <img src={icons.close} alt="imagem de X" />
      </ButtonClose>
      <nav>
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
