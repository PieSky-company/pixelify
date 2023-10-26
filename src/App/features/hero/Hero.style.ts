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
  overflow: hidden;

  filter: hue-rotate(0deg);
  background: linear-gradient(45deg, #0f8, #08f);
  animation: ${hueAnimation} 10000ms infinite linear;
`;

export const TitleContainer = styled.div`
  position: relative;
  max-width: 400px;
  margin-bottom: 50px;

  padding: 0px 10px;

  @media (min-width: 768px) {
    max-width: 800px;
  }

  .bubble-svg {
    min-width: 380px;

    max-width: 700px;

    width: 65%;
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%); /* This centers the SVG */
    z-index: -1; /* This places the SVG behind the text */

    @media (min-width: 768px) {
      top: 38%;
    }
  }
`;
