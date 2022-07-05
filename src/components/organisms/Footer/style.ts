import styled from "styled-components";
import { COLORS } from "../../../common";

export const Container = styled.footer`
  width: 100%;
  padding: 32px 0;
  color: ${COLORS.gray_dark};
  background: ${COLORS.black_light};
  display: flex;
  justify-content: space-evenly;
  .opening-hours h2 {
    margin-bottom: 20px;
  }
  @media (max-width: 796px) {
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const LogoCard = styled.div`
  img {
    width: 100px;
    height: 120px;
  }
`;

export const Contact = styled.div`
  width: 100%;
  margin-top: 32px;
  a {
    color: #aaa;
    :hover {
      color: ${COLORS.white_default};
    }
  }
  h4 {
    margin: 20px 0 10px 0;
  }
  h4 a {
    color: ${COLORS.white_default};
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
