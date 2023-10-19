import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  padding: 80px 20px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #25094b;

  position: relative;
`;

export const TitleContainer = styled.div`
  z-index: 10;
  max-width: 600px;
  margin-top: 20px;

  @media (min-width: 768px) {
    max-width: 800px;
    margin-top: 25px;
  }
`;

export const AboutContentContainer = styled.div`
  z-index: 10;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 0px 10px;

  max-width: 420px;

  @media (min-width: 768px) {
    padding: 0px 20px;
    gap: 10px;
    max-width: 800px;
  }
`;

export const KrechaImg = styled.img`
  position: absolute;
  max-width: 420px;
  width: 100%;

  max-height: 420px;

  @media (min-width: 768px) {
    max-height: 500px;
  }
  z-index: 0;
`;
