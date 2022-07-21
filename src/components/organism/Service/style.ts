import styled from "styled-components";
import { COLORS } from "../../../common";

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
  color: ${COLORS.white_default};
  h1 {
    text-transform: uppercase;
    padding-bottom: 6px;
  }
`;
export const Divider = styled.div`
  width: 60%;
  height: 4px;
  background-color: ${COLORS.primary};
`;

export const ClassRoom = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

export const ClassType = styled.div`
  background-color: white;
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-top: 20px;
  color: ${COLORS.white_100};
  align-items: center;
  background-color: #1313149c;
  border-radius: 8px;
  cursor: pointer;
  :nth-child(1) {
    img {
      width: 265px;
    }
  }
  :nth-child(2) {
    img {
      width: 210px;
    }
  }
  :nth-child(3) {
    img {
      width: 310px;
    }
  }
  :nth-child(4) {
    img {
      width: 280px;
    }
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    width: 10ch;
  }
`;
