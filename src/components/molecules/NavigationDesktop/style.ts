import styled from "styled-components";
import { COLORS } from "../../../common";

export const Navigation = styled.ul`
  display: flex;
  gap: 30px;
  a {
    font-weight: 600;
    :hover {
      color: ${COLORS.secondary};
    }
  }
`;

export const Media = styled.img`
  width: 20px;
  height: 20px;
  filter: grayscale(90%);

  :hover {
    filter: grayscale(0);
  }
`;
