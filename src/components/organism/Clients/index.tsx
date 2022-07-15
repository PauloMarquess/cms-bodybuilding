import SwiperCore, { Navigation, Pagination } from "swiper";
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

SwiperCore.use([Navigation, Pagination]);

export const Clients = () => {
  const width = window.innerWidth;
  let perView = 1.5;
  if (width < 1055) {
    perView = 1.2;
  }
  if (width < 900) {
    perView = 1.1;
  }
  if (width < 769) {
    perView = 1;
  }
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
          slidesPerView={perView}
          navigation
          pagination={{ clickable: true }}
        >
          {ClientsMocks.map((i) => (
            <SwiperSlide slot="wrapper-end">
              <ClientCard>
                <div className="border-clip">
                  <img src={i.img} alt="img" />
                </div>
                <ClientDescription>
                  <img src={icons.aspa} />
                  <p>{i.description}</p>
                  <div className="name-stars">
                    <h4>{i.name}</h4>
                    <div>{StarMaped}</div>
                  </div>
                </ClientDescription>
              </ClientCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideContainer>
    </ContainerClients>
  );
};
function handleIsMob(): number | "auto" | undefined {
  throw new Error("Function not implemented.");
}
function ofi(): any {
  throw new Error("Function not implemented.");
}
function largura(): any {
  throw new Error("Function not implemented.");
}
