import { COLORS } from "./../../../common/index";
import styled from "styled-components";

export const ModalCard = styled.div`
  width: 65%;
  height: 100vh;
  background: ${COLORS.black_light};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  transition: 0.3s;
  animation: show 0.3s ease-in-out;

  @keyframes show {
    from {
      opacity: 0;
      transform: translate3d(20%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 20px;
    margin: 60px 10px 0 0;
    a {
      text-transform: uppercase;
      font-size: 22px;
      font-weight: bolder;
      color: ${COLORS.gray};
      :hover {
        color: ${COLORS.third};
      }
    }
  }
`;
export const ButtonClose = styled.div`
  @media (max-width: 769px) {
    img {
      width: 20px !important;
      margin: 0 10px 20px 0;
    }
  }
`;
