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

export const ContactContainer = styled.div`
  width: 100%;

  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 80px 20px;

  justify-content: space-between;
  align-items: center;

  background: linear-gradient(219deg, deepskyblue, darkviolet, blue, white);
  background-size: 240% 240%;
  animation: ${gradientAnimation} 3s ease infinite;

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
