import styled from "styled-components";
import { COLORS } from "../../../common";

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${COLORS.black_light};
  color: ${COLORS.white_default};
  padding: 5px 0;
`;
