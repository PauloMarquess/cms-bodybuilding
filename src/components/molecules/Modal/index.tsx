import { icons } from "../../../assets";

import {
  ButtonClose,
  CardDetails,
  CardModal,
  ContainerModal,
  List,
  LogoImage,
} from "./style";

const Modal = ({ handleModal, details }: any) => {
  const { name, image, id, specialties } = details;
  return (
    <ContainerModal>
      <CardModal>
        <ButtonClose onClick={handleModal}>x</ButtonClose>
        <CardDetails>
          <LogoImage src={image} alt={id} />
          <h1>{name}</h1>
          <List>
            {specialties?.map((specialtie: any) => (
              <li>
                <img src={icons.verify} alt="icone verificado" />
                {specialtie.name}
              </li>
            ))}
          </List>
        </CardDetails>
      </CardModal>
    </ContainerModal>
  );
};

export default Modal;
