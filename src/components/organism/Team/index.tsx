import { Container } from "../..";
import { team, socialMediaTeachers } from "../../../__mocks__";
import { i18n } from "../../../translate/i18n.js";
import {
  CardTeacher,
  Teacher,
  Divider,
  Legend,
  Details,
  CardLinks,
} from "./style";

const Team = () => {
  return (
    <Container
      responsive
      backgroundParallax
      id="team"
      column
      justify="flex-start"
    >
      <Legend>
        <h1>{i18n.t("team.title")} </h1>
        <Divider />
      </Legend>
      <CardTeacher>
        {team.map((item) => (
          <Teacher key={item.name}>
            <img src={item.image} alt="foto do professor " />
            <Details>
              <h1>{item.name}</h1>
              <p>{item.functionTeacher}</p>
              <CardLinks>
                {socialMediaTeachers.map((icon) => (
                  <a key={icon.name}>
                    <img src={icon.icons} alt="icone rede social" />
                  </a>
                ))}
              </CardLinks>
            </Details>
          </Teacher>
        ))}
      </CardTeacher>
    </Container>
  );
};

export default Team;
