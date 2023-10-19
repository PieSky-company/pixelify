import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const BreakContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: linear-gradient(219deg, deepskyblue, darkviolet, blue, white);
  background-size: 240% 240%;
  animation: ${gradientAnimation} 3s ease infinite;
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
