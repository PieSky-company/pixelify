import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Amiko", sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-shadow: -2.470050096511841px -0.08625590056180954px 0px #0ff;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const H2 = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-shadow: -1.8221900463104248px -0.0636323019862175px 0px #0ff;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const H3 = styled.h3`
  font-family: "DM Sans", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const H4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const H5 = styled.h5`
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  //mobilki x
`;

export const AppContainer = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  position: relative;

  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  max-width: 310px;
  font-family: "Inter", sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: #fff;

  cursor: pointer;

  border-radius: 28px;
  border: 3px solid #fff;

  transition: background-color 0.2s;

  &:hover {
    background: white;
    color: black;
  }
`;

export const ColoredSpan = styled.span`
  color: #ed9ac2;
`;
