import { images } from "../../../assets";
import { Container } from "../../atoms/Container/styled";
import { CardMission, ImageMission, ListObjtive } from "./style";
import { icons } from "../../../assets";
import { missionMock } from "../../../locale/ptBr";

const Mission = () => {
  return (
    <Container height="550px" responsive id="mission">
      <CardMission>
        <h1>
          Construção de <span>músculos</span>
        </h1>
        <h3>
          <span> | </span> Sem tempo para treinar ? Conheça nosso modelo de
          treino
        </h3>
        <p>
          Mais de 400 pessoas já atingiram seus objetivos seja no ganho de
          massa, emagrecimento ou definição sem passar anos para ver mudança.
          Parece mágica, mas é apenas o direcionamento personalizado, que te
          leva do seu físico atual até sua meta, no menor tempo possível.
        </p>
        <ListObjtive>
          {missionMock.map((obj) => (
            <li key={obj.name}>
              <img src={icons.verify} />
              {obj.name}
            </li>
          ))}
        </ListObjtive>
      </CardMission>
      <ImageMission>
        <img src={images.crossfit} alt="foto Charles Mario" />
      </ImageMission>
    </Container>
  );
};

export default Mission;
