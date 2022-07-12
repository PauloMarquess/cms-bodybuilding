import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { StarMaped, ClientsMocks } from "../../../__mocks__";
import { icons } from "../../../assets";
import { Container } from "../../atoms/Container/styled";
import {
  ClientCard,
  ContainerClients,
  SlideContainer,
  TextContainer,
  Background,
  ClientDescription,
} from "./style";

/* const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <img src={icons.ArrowLeft} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <img src={icons.ArrowRight} />
    </button>
  ),
  indicators: () => <div className="indicator" />,
}; */

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
        <Swiper
          spaceBetween={-400}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {ClientsMocks.map((i) => (
            <SwiperSlide>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideContainer>
    </ContainerClients>
  );
};
