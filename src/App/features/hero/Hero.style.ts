import styled, { keyframes } from "styled-components";

const hueAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  filter: hue-rotate(0deg);
  background: linear-gradient(45deg, #0f8, #08f);
  animation: ${hueAnimation} 10000ms infinite linear;
`;

export const TitleContainer = styled.div`
  max-width: 800px;
  margin-bottom: 50px;

  padding: 0px 10px;
`;
