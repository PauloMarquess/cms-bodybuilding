import { Slide } from "react-slideshow-image";
import { StarMaped, ClientsMocks } from "../../../__mocks__";
import "react-slideshow-image/dist/styles.css";
import { icons } from "../../../assets";
import { Container } from "../../atoms/Container/styled";
import {
  ClientCard,
  ContainerClients,
  SlideContainer,
  TextContainer,
  Background,
  ClientDescription,
  buttonStyle,
} from "./style";

const properties = {
  arrows: false,
  indicators: () => <div className="indicator" />,
};

export const Clients = () => {
  return (
    <ContainerClients>
      <Background />
      <TextContainer>
        <h1>
          Clientes <span>Treinados</span> dizem
        </h1>
        <p>
          “Eu gosto da cor vermelha porque lembra fogo. E eu vejo a mim mesmo
          sempre pegando fogo.” - Arnold Schwarzenegger
        </p>
      </TextContainer>
      <SlideContainer>
        <Slide {...properties}>
          {ClientsMocks.map((i) => (
            <div className="each-slide-effect">
              <ClientCard>
                <div className="border-clip">
                  <img src={i.img} alt="img" />
                </div>
                <ClientDescription>
                  <img src={icons.aspa} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat id alias ea rem reprehenderit ad rerum at aliquid
                    debitis delectus? Doloremque at quod quibusdam temporibus
                    ullam earum quae, expedita vitae.
                  </p>
                  <Container height="auto" justify="space-between">
                    <h4>{i.name}</h4>
                    <div>{StarMaped}</div>
                  </Container>
                </ClientDescription>
              </ClientCard>
            </div>
          ))}
        </Slide>
      </SlideContainer>
    </ContainerClients>
  );
};
