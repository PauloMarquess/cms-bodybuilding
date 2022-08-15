import styled from "styled-components";
import { COLORS } from "../../../common";
import { CardButton } from "../../atoms/ButtonLink/style";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

export const ButtonClose = styled(CardButton)`
  width: 50px;
  position: absolute;
  top: 0;
  right: 15%;
`;
export const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${COLORS.secondary};
`;
export const CardDetails = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.white_100};
`;
