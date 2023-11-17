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

  /* filter: hue-rotate(0deg);
  background: linear-gradient(45deg, #0f8, #08f);
  animation: ${hueAnimation} 10000ms infinite linear; */

  position: relative;

  overflow: hidden;
`;

export const BreakContentContainer = styled.div`
  text-align: center;
  margin: 100px 30px;
  max-width: 250px;

  z-index: 100;

  @media (min-width: 768px) {
    margin: 140px 30px;
    max-width: 400px;
  }

  @media (min-width: 768px) {
    margin: 180px 30px;
    max-width: 800px;
  }
`;

export const BreakIFrame = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);

  @media (min-aspect-ratio: 16/9) {
    height: 56.25vw; /* height = 100 * (9 / 16) = 56.25 */
  }

  @media (max-aspect-ratio: 16/9) {
    width: 177.78vh; /* width = 100 / (9 / 16) = 177.777777 */
  }
`;
