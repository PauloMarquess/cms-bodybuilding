import { images } from "../../../assets";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container/styled";
import { Images, Information } from "./style";

const Presentation = () => {
  return (
    <Container backgroundColor height="120vh" id="home">
      <Images src={images.presentation} />
      <Information>
        <h2>Saúde + Poder + Felicidade</h2>
        <h1>Construa seu corpo</h1>
        <h6>
          Nossa equipe qualificada de instrutores ajuda nossos clientes a
          desenvolver seus corpos e mentes, alcançar os melhores resultados e
          aproveitar os verdadeiros desafios de condicionamento físico enquanto
          estamos motivados positivamente. Resultados que você e seu corpo
          merecem.
        </h6>
        <Button children="Comece Hoje" onClick={() => {}} />
      </Information>
    </Container>
  );
};

export default Presentation;
