import styled from "styled-components";
import { COLORS } from "../../../common";
import { icons } from "../../../assets";

export const ContainerClients = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${COLORS.white_default};
  position: relative;
`;
export const Background = styled.div`
  position: absolute;
  top: 15%;
  width: 30%;
  height: 70vh;
  background: ${COLORS.black_light};
  clip-path: polygon(0 0, 100% 25%, 100% 75%, 0% 100%);
`;

export const TextContainer = styled.div`
  margin-top: 32px;
  align-self: center;
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.black};
  h1 {
    span {
      color: ${COLORS.primary};
    }
  }
  p {
    margin-top: 32px;
    width: 60%;
  }
  @media (max-width: 769px) {
    margin-top: 100px;
    p {
      display: none;
    }
  }
`;
export const SlideContainer = styled.div`
  margin: auto 0;
  .swiper {
    padding: 100px 0;
    width: 100%;
    @media (max-width: 769px) {
      padding: 100px 0;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 85%;
    margin: 0 41%;
    padding: 20px;
    width: 80px;
    height: 80px;
    @media (max-width: 769px) {
      display: none;
    }
    @media (max-width: 1115px) {
      margin: 0 39%;
    }
    @media (max-width: 860px) {
      margin: 0 35%;
    }
  }
  .swiper-button-next {
    content: url(${icons.ArrowRight});
  }
  .swiper-button-prev {
    content: url(${icons.ArrowLeft});
  }
  .swiper-pagination-bullet {
    background-color: ${COLORS.black};
    border: 3px solid ${COLORS.white_default};
    padding: 4px;
  }
  .swiper-pagination-bullet-active {
    border: 3px solid ${COLORS.primary};
  }
  .swiper-pagination-horizontal,
  .swiper-pagination-fraction {
    top: 92%;
  }
`;
export const ClientCard = styled.div`
  display: flex;
  width: 600px;
  height: 40vh;
  margin: 0 auto;
  background: ${COLORS.white_dark};
  border: 5px solid ${COLORS.white_100};
  border-radius: 13px;
  .border-clip {
    background: ${COLORS.white_100};
    border: 13px solid ${COLORS.white_100};
    padding: 0 5px;
    width: 50%;
    height: 100%;
    position: relative;
    right: 12.7%;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      background: transparent;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      width: 100%;
      height: 100%;
    }
    @media (max-width: 769px) {
      display: none;
    }
  }
  @media (max-width: 769px) {
    width: 80%;
  }
`;

export const ClientDescription = styled.div`
  width: 50%;
  display: flex;
  padding: 10px;
  color: ${COLORS.black_light};
  flex-direction: column;
  font-size: 0.9rem;
  justify-content: space-between;
  .name-stars {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  h4 {
    color: ${COLORS.black};
  }
  p {
    width: 100%;
  }
  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 769px) {
    width: 100%;
    font-size: 0.8rem;
    padding: 10px;
  }
`;
