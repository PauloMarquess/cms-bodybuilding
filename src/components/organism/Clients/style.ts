import styled from "styled-components";
import { COLORS } from "../../../common";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${COLORS.gray_dark};
  position: relative;
`;
export const Background = styled.div`
  position: absolute;
  top: 15%;
  width: 30%;
  height: 70vh;
  background: ${COLORS.black_light};
  clip-path: polygon(0 0, 0 100%, 100% 50%);
`;

export const TextContainer = styled.div`
  margin-top: 32px;
  align-self: center;
  position: absolute;
  text-align: center;
`;
export const SlideContainer = styled.div`
  margin: auto 0;
  .each-slide-effect {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ClientCard = styled.div`
  display: flex;
  background: ${COLORS.white_default};
  width: 50%;
  height: 240px;
  .border-clip {
    border: 13px solid white;
    background: ${COLORS.white_default};
    position: relative;
    right: 100px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    background: transparent;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    height: 220px;
    width: 320px;
  }
`;
