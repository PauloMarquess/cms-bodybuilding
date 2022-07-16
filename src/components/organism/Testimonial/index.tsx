import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { StarMaped, ClientsMocks } from "../../../__mocks__";
import { icons } from "../../../assets";

import {
  SectionTestimonial,
  SlideContainer,
  StudentComent,
  StudentAssessment,
  CardStudent,
  CardTestimonial,
  Background,
} from "./style";
import { ImageHexagono } from "../../atoms/ImageHexagono/style";

SwiperCore.use([Navigation, Pagination]);

const Testimonial = () => {
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
    <SectionTestimonial>
      <CardTestimonial>
        <h1>
          Conheça alguns <span>Depoimentos</span> de nossos alunos
        </h1>
      </CardTestimonial>
      <SlideContainer>
        <Background>
          <img src={icons.background} alt="imagem background" />
        </Background>
        <Swiper
          slidesPerView={perView}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {ClientsMocks.map((i) => (
            <SwiperSlide>
              <CardStudent>
                <ImageHexagono src={i.img} alt="perfil do cliente" />
                <StudentComent>
                  <img src={icons.aspa} />
                  <p>{i.description}</p>
                  <StudentAssessment>
                    <h4>{i.name}</h4>
                    <div>{StarMaped}</div>
                  </StudentAssessment>
                </StudentComent>
              </CardStudent>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideContainer>
    </SectionTestimonial>
  );
};

export default Testimonial;
