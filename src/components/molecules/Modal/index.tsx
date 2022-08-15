import { COLORS } from "../../../common";
import { Container } from "../../atoms/Container";
import { ButtonClose, CardDetails, ContainerModal, LogoImage } from "./style";

const Modal = ({ handleModal, details }: any) => {
  const { name, image, id } = details;
  return (
    <ContainerModal>
      <Container
        width="70%"
        margin="0 auto"
        background={COLORS.black_medium}
        column
      >
        <ButtonClose onClick={handleModal}>x</ButtonClose>
        <CardDetails>
          <LogoImage src={image} alt={id} />
          <h1>{name}</h1>
        </CardDetails>
      </Container>
    </ContainerModal>
  );
};

export default Modal;
