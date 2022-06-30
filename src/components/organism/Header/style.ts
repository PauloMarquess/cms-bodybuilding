import styled from "styled-components";
import { COLORS } from "../../../common";

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${COLORS.black_light};
  color: ${COLORS.white_default};
  padding: 10px 0;
  -webkit-box-shadow: 0px 2px 5px 0px #000000;
  box-shadow: 0px 2px 5px 0px #000000;
`;
export const CardLogo = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-family: "Raleway", sans-serif;
    color: ${COLORS.primary};
  }
`;
