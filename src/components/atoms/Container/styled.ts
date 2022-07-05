import styled from "styled-components";
import { COLORS } from "../../../common";

interface ContainerProps {
  column?: boolean;
  justify?: string;
  align?: string;
  background?: string;
  responsive?: boolean;
  hresponsive?: boolean;
  height?: string;
  width?: string;
  backgroundColor?: boolean;
}
export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && `${COLORS.black_light}`};

  @media (max-width: 769px) {
    flex-direction: ${({ responsive }) => (responsive ? "column" : "row")};
    padding: 0 30px;
    height: ${({ hresponsive }) => (hresponsive ? "100vh" : "auto")};
  }
`;
