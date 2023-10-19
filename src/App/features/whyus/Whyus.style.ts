import styled from "styled-components";

export const WhyusContainer = styled.div`
  width: 100%;

  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 80px 20px;

  justify-content: space-between;
  align-items: center;

  background: #3d1078;

  @media (max-width: 320px) {
    padding: 50px 10px;
  }

  @media (min-width: 768px) {
    padding: 100px 20px;
    padding-bottom: 120px;
  }
`;

export const WhyusContentContainer = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: 1000px) {
    gap: 80px;
    margin-top: 100px;
  }
`;

export const WhyusContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  max-width: 350px;
`;

export const WhyusImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
