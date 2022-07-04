import { images } from "../../../assets";
import { Container } from "../../atoms/Container/styled";
import { CardMission, ImageMission } from "./style";

const Mission = () => {
  return (
    <Container background="#cccacb">
      <CardMission>
        <h1>Construçã de músculos</h1>
        <h3>
          Charles Mario, especialista em treinamento de volume de 12 semanas
        </h3>
        <p>
          Tomar a decisão de ingressar em uma academia é um ótimo primeiro passo
          para melhorar sua saúde e qualidade de vida. Por mais de 10 anos, a
          CMSK tem se dedicado a oferecer às pessoas uma ótima experiência de
          condicionamento físico, ajudando pessoas de todos os níveis de
          condicionamento físico a atingir seus objetivos.
        </p>
      </CardMission>
      <ImageMission>
        <img src={images.mission} alt="foto Charles Mario" />
      </ImageMission>
    </Container>
  );
};

export default Mission;
