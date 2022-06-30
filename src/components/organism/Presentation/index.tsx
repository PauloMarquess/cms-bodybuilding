import { images } from "../../../assets";
import { Container } from "../../atoms/Container/styled";
import { Images, Information } from "./style";

const Presentation = () => {
  return (
    <Container height="90vh">
      <Images src={images.presentation} />
      <Information>
        <h2>+ Saúde + Poder + Felicidade</h2>
        <h1>Construa seu corpo</h1>
        <p>
          Nossa equipe qualificada de instrutores ajuda nossos clientes a
          desenvolver seus corpos e mentes, alcançar os melhores resultados e
          aproveitar os verdadeiros desafios de condicionamento físico enquanto
          estamos motivados positivamente. Resultados que você e seu corpo
          merecem.
        </p>
      </Information>
    </Container>
  );
};

export default Presentation;
