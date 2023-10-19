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

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: linear-gradient(219deg, deepskyblue, darkviolet, blue, white);
  background-size: 240% 240%;
  animation: ${gradientAnimation} 12s ease infinite;
`;

export const TitleContainer = styled.div`
  max-width: 800px;
  margin-bottom: 50px;

  padding: 0px 10px;
`;
