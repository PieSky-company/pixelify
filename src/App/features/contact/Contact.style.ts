import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;

  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 80px 20px;

  justify-content: space-between;
  align-items: center;

  @media (max-width: 320px) {
    padding: 50px 10px;
  }

  @media (min-width: 768px) {
    padding: 100px 20px;
  }

  position: relative;
  overflow: hidden;
`;

export const ContactContentContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  z-index: 10;

  @media (min-width: 768px) {
    max-width: 1000px;
    gap: 80px;
    padding-bottom: 150px;
  }

  padding-bottom: 300px;
`;

export const LogoImg = styled.img`
  width: 100%;
  max-width: 260px;
`;

export const ContactIFrame = styled.iframe`
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
