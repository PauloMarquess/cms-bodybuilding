import styled from "styled-components";

interface ContainerButtonProps {
  background?: string;
  color?: boolean;
  fullWidth?: boolean;
}

export const ContainerButton = styled.div<ContainerButtonProps>`
  button {
    padding: 20px 25px;
    border: none;
    font-weight: 600;
    font-size: 18px;
    width: 100%;

    :hover {
      cursor: pointer;
    }
  }
`;
