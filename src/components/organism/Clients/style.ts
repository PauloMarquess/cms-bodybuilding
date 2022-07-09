import styled from "styled-components";
import { COLORS } from "../../../common";
import "react-slideshow-image/dist/styles.css";

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
  .each-slide-effect {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav.default-nav {
  }
  .indicators {
    position: absolute;
    left: 50%;
    bottom: 22%;
    @media (max-width: 769px) {
      left: 45%;
    }
  }
  .indicator {
    cursor: pointer;
    width: 10px;
    height: 10px;
    padding: 4px;
    background: ${COLORS.black_light};
    border: 3px solid ${COLORS.white_default};
    border-radius: 50%;
  }
  .indicator.active {
    border: 3px solid ${COLORS.third};
  }
`;

export const ClientCard = styled.div`
  display: flex;
  width: 50%;
  height: 40vh;
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
  width: 40%;
  padding: 10px;
  display: flex;
  color: ${COLORS.black_light};
  flex-direction: column;
  justify-content: space-between;
  h4 {
    color: ${COLORS.black};
  }
  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};
