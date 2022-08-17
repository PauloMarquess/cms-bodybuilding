import styled from "styled-components";
import { COLORS } from "../../../common";
import { CardButton } from "../../atoms/ButtonLink/style";
import { Container } from "../../atoms/Container";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;
export const CardModal = styled(Container)`
  width: 50%;
  height: 600px;
  margin: auto;
  background: ${COLORS.black_medium};
  position: relative;
  top: 10%;
`;

export const ButtonClose = styled(CardButton)`
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
`;
export const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${COLORS.secondary};
`;
export const CardDetails = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.white_100};
  overflow: hidden;
  h1 {
    font-size: 25px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  img {
    width: 20px;
  }
`;
