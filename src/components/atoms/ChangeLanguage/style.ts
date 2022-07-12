import styled from "styled-components";
import { COLORS } from "../../../common";

export const CardSelect = styled.div`
  img {
    width: 20px;
  }
  select {
    color: ${COLORS.white_default};
    height: 30px;
    width: 200px;
    font-weight: bolder;
    border-radius: 8px;
    text-align: end;
    background-color: ${COLORS.black_light};
    option {
      padding: 20px;
      text-align: center;
      font-weight: bolder;
    }
  }
`;
