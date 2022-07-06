import styled from "styled-components";
import { COLORS } from "../../../common";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background: ${COLORS.gray_dark};
`;

export const TextContainer = styled.div`
  align-self: center;
  text-align: center;
`;
export const SlideContainer = styled.div`
  .each-slide-effect {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ClientCard = styled.div`
  width: 500px;
  height: 200px;
  background: ${COLORS.black_light};
  img {
    width: 40px;
    height: 40px;
  }
`;
