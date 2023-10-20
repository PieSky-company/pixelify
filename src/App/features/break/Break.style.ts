import styled, { keyframes } from "styled-components";

const hueAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

export const BreakContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  filter: hue-rotate(0deg);
  background: linear-gradient(45deg, #0f8, #08f);
  animation: ${hueAnimation} 10000ms infinite linear;
`;

export const BreakContentContainer = styled.div`
  text-align: center;
  margin: 100px 30px;
  max-width: 250px;

  @media (min-width: 768px) {
    margin: 140px 30px;
    max-width: 400px;
  }

  @media (min-width: 768px) {
    margin: 180px 30px;
    max-width: 800px;
  }
`;
