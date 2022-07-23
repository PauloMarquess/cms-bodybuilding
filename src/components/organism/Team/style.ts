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

export const CardTeacher = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
  @media (max-width: 769px) {
    flex-direction: column;
    padding: 30px 0 60px 0;
  }
`;

export const Teacher = styled.div`
  background-color: white;
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 22%;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 20px;
  color: ${COLORS.white_100};
  align-items: center;
  background-color: #1313149c;
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  img {
    width: 300px;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    width: 10ch;
  }
  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  gap: 10px;
  background-color: green;
  position: absolute;
  bottom: 0;
  background-color: ${COLORS.primary};
  color: ${COLORS.black_medium};
  p {
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const CardLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 20px;
    filter: brightness(20%);

    :hover {
      filter: brightness(0%);
    }
  }
`;
