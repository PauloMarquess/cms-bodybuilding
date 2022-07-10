import { images } from "../../../assets";
import { Container } from "../../atoms/Container/styled";
import { CardMission, ImageMission, ListObjtive } from "./style";
import { icons } from "../../../assets";
import { i18n } from "../../../translate/i18n.js";
import { objective } from "../../../__mocks__";

const Mission = () => {
  return (
    <Container height="550px" responsive id="mission">
      <CardMission>
        <h1>
          {i18n.t("mission.title")} <span> {i18n.t("mission.titleSpan")}</span>
        </h1>
        <h3>
          <span> | </span> {i18n.t("mission.subtitle")}
        </h3>
        <p>{i18n.t("mission.description")}</p>
        <ListObjtive>
          {objective.map((obj) => (
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
