import styled from "styled-components";
import { COLORS } from "../../common";

export const BtnLink = styled.a`
  background: ${COLORS.third};
  color: ${COLORS.black};
  padding: 15px 20px;
  font-weight: 600;
  font-size: 20px;
  margin: 0 auto;
  border: 2px solid ${COLORS.third};

  :hover {
    font-weight: bold;
    background-color: ${COLORS.black_medium};
    color: ${COLORS.third};
  }
`;
