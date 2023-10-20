import styled from "styled-components";
import { H3 } from "../../App.style";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const ModalContent = styled.div`
  background: #eee;
  min-width: 240px;
  border-radius: 30px;
  padding: 20px 30px;
  position: relative;
  width: 80%;
  max-width: 500px;
  border: 2px solid #ed9ac2;

  border: 3px solid #81c2ff;
  z-index: 1000;

  @media (min-width: 400px) {
    padding: 20px 50px;
  }
`;

export const ModalTitleContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 30px;

  position: relative;
  border-bottom: 2px solid #81c2ff;

  @media (min-width: 400px) {
    margin-top: 30px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;

  width: 40px;
  height: 40px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media (min-width: 1000px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const FormContainer = styled.div`
  padding-top: 50px;

  ${H3} {
    color: #25094b;
  }
`;

export const ButtonGroupContainer = styled.div`
  margin: 20px 0px;
`;

export const ButtonG = styled.button<{ selected: boolean }>`
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: ${(props) => (props.selected ? "white" : "#2E02494D")};
  background: ${(props) =>
    props.selected
      ? "linear-gradient(25deg, #ed9ac2 0%, #d24896 34.75%, #a559a3 57.88%, #4c489e 100.14%)"
      : "none"};

  border: ${({ selected }) =>
    selected ? "" : "2px solid rgba(46, 2, 73, 0.30);"};

  &:hover {
    background-color: ${(props) => (props.selected ? "#0a6" : "#ccc")};
  }
`;
