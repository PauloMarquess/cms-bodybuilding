import styled from "styled-components";

interface ContainerProps {
  column?: boolean;
  justify?: string;
  align?: string;
  background?: string;
  responsive?: boolean;
  hresponsive?: boolean;
  height?: string;
  width?: string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100vh")};

  @media (max-width: 769px) {
    flex-direction: ${({ responsive }) => (responsive ? "column" : "row")};

    height: ${({ hresponsive }) => (hresponsive ? "100vh" : "auto")};
  }
`;
