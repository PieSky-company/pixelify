import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 50px;

  width: 100%;
  display: flex;
  flex-direction: column;

  max-width: 1200px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0px;
  }
`;

export const FooterContent = styled.div`
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (min-width: 768px) {
    width: 33%;
    margin-bottom: 0px;
  }
`;

export const FooterIconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterIcon = styled.img`
  width: 28px;
  height: 28px;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
