import { COLORS } from "./../../../common/index";
import styled from "styled-components";

export const CardPlans = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${COLORS.white_default};
  @media (max-width: 769px) {
    flex-direction: column;
    padding: 40px 0;
    gap: 30px;
  }
`;
export const CardPlan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5px;
  padding: 25px 30px;
  border-radius: 8px;
  background-color: red;
  width: 22%;
  height: 70vh;
  cursor: pointer;
  position: relative;
  background-color: ${COLORS.primary};
  margin: 0 10px;
  transition: all 0.5s ease;
  :nth-child(2) {
    background-color: ${COLORS.black};
  }
  :hover {
    width: 25%;
    height: 75vh;
  }
  @media (max-width: 769px) {
    width: 100%;

    :hover {
      width: 100%;
      bottom: 0;
      height: 70vh;
    }
  }
`;
export const ListBenefit = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  img {
    width: 15px;
  }
`;

export const Cifrao = styled.span`
  position: relative;
  bottom: 20px;
  font-size: 12px;
`;
export const Price = styled.span`
  font-size: 30px;
  font-weight: bolder;
`;
export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background: ${COLORS.gray};
  position: relative;
  bottom: 10px;
`;
export const CrownAbsolute = styled.img`
  width: 70px;
  position: absolute;
  top: -5px;
  left: -25px;
  transform: rotate(320deg);
`;
