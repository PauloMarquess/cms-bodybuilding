import styled from "styled-components";
import { COLORS } from "../../../common";

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  text-align: center;
  z-index: 3;
  gap: 20px;
  position: relative;
  right: 100px;
  transition: 1s;
  animation: show 1.5s both;

  h2 {
    font-size: 2.2rem;
    text-transform: uppercase;
  }
  h1 {
    font-size: 4.8rem;
    width: 70%;
    margin: 0 auto;
    text-transform: uppercase;
  }
  h6 {
    font-size: 1.2rem;
    font-family: 700;
  }
  @keyframes show {
    from {
      opacity: 0;
      transform: translate3d(0, 20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const Images = styled.img`
  position: relative;
  left: 200px;
  top: 100px;
  width: 40%;
  border-radius: 28px;
`;


