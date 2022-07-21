import { Container } from "../..";
import { services } from "../../../__mocks__";
import { ClassRoom, ClassType, Divider, Legend } from "./style";

const Service = () => {
  return (
    <Container backgroundParallax id="service" column justify="flex-start">
      <Legend>
        <h1>Nosso serviços</h1>
        <Divider />
      </Legend>
      <ClassRoom>
        {services.map((item) => (
          <ClassType key={item.name}>
            <h1>{item.name}</h1>
            <img src={item.image} alt="foto do professor " />
          </ClassType>
        ))}
      </ClassRoom>
    </Container>
  );
};

export default Service;
