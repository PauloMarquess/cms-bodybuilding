import styled from "styled-components";
import { COLORS } from "../../../common";

interface ContainerButtonProps {
  background?: string;
  color?: boolean;
  fullWidth?: boolean;
}

export const ContainerButton = styled.div<ContainerButtonProps>`
  button {
    padding: 15px 20px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    background-color: ${COLORS.third};
    color: ${COLORS.black};

    :hover {
      cursor: pointer;
      font-weight: bold;
      border: 2px solid ${COLORS.third};
      background-color: transparent;
      color: ${COLORS.third};
    }
  }
`;
