import styled, { keyframes } from "styled-components";
import { H1 } from "../../App.style";

const hueAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: hue-rotate(0deg);
  background: linear-gradient(45deg, #0f8, #08f);
  animation: ${hueAnimation} 10000ms infinite linear;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  z-index: 1111;
  ${H1} {
    min-width: 280px;
  }
`;

const spinifyAnimation = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  33% {
    transform: translate(0px, 24px);
    border-radius: 100%;
    width: 10px;
    height: 10px;
  }
  66% {
    transform: translate(0px, -16px);
  }
  88% {
    transform: translate(0px, 4px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

export const BlocksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px; // added some margin to space out blocks from the text
`;

const Block = styled.div`
  width: 10px;
  height: 30px;
  background-color: rgba(256, 256, 256, 0.8);
  animation-name: ${spinifyAnimation};
  animation-duration: 1600ms;
  animation-iteration-count: infinite;
  margin: 0 5px; // added a small margin for spacing between blocks
`;

export const Block1 = styled(Block)`
  animation-delay: 0ms;
`;

export const Block2 = styled(Block)`
  animation-delay: 100ms;
`;

export const Block3 = styled(Block)`
  animation-delay: 200ms;
`;
