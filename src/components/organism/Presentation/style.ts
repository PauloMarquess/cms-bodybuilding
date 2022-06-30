import styled from "styled-components";

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  text-align: center;
  z-index: 3;
  gap: 20px;
  position: relative;
  right: 100px;

  h1,
  h2 {
    text-transform: uppercase;
  }
  h2 {
    font-size: 2.2rem;
  }
  h1 {
    font-size: 4.8rem;
    width: 70%;
    margin: 0 auto;
  }
  h6 {
    font-size: 1.2rem;
    font-family: 700;
  }
`;

export const Images = styled.img`
  position: relative;
  left: 200px;
  top: 100px;
  width: 40%;
  border-radius: 28px;
`;
