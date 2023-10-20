import styled, { keyframes } from "styled-components";

const hueAnimation = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

export const ContactContainer = styled.div`
  width: 100%;

  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 80px 20px;

  justify-content: space-between;
  align-items: center;

  filter: hue-rotate(0deg);
  background: linear-gradient(45deg, #0f8, #08f);
  animation: ${hueAnimation} 10000ms infinite linear;

  @media (max-width: 320px) {
    padding: 50px 10px;
  }

  @media (min-width: 768px) {
    padding: 100px 20px;
  }
`;

export const ContactContentContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;

  @media (min-width: 768px) {
    max-width: 1000px;
    gap: 80px;
    padding-bottom: 150px;
  }

  padding-bottom: 300px;
`;

export const LogoImg = styled.img`
  width: 100%;
  max-width: 300px;
`;
