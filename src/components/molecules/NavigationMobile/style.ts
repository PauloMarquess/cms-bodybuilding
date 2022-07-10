import styled from "styled-components";

export const CardMobile = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 769px) {
    display: flex;
    img {
      width: 50px;
      position: fixed;
      right: 0;
      top: 14px;
    }
  }
`;
