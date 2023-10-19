import styled from "styled-components";

export const OffersContainer = styled.div`
  width: 100%;

  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 80px 20px;

  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 320px) {
    padding: 50px 10px;
  }
`;

export const OffersContentContainer = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 1000px) {
    margin-top: 100px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  max-width: 400px;

  button {
    margin-top: 8px;
    background: transparent;
    border: none;

    width: auto;
    width: 200px;
    cursor: pointer;
    text-decoration: underline;
    color: white;

    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const OffersContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;

export const OffersIcon = styled.img`
  width: 80px;
  height: 80px;

  @media (min-width: 1000px) {
    width: 120px;
    height: 120px;
  }
`;
