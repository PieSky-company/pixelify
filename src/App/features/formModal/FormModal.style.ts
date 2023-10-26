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

  max-height: 80vh;
  overflow: auto;

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

export const FormContainer = styled.form`
  padding-top: 30px;

  ${H3} {
    color: #25094b;
  }

  @media (min-width: 768px) {
    padding-top: 30px;
  }
`;

export const ButtonGroupContainer = styled.div`
  margin: 20px 0px;

  display: flex;
  flex-direction: column;

  @media (min-width: 560px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const gradientBg =
  "linear-gradient(25deg, #ed9ac2 0%, #d24896 34.75%, #a559a3 57.88%, #4c489e 100.14%)";

export const FormButton = styled.button<{ selected: boolean }>`
  border: ${({ selected }) =>
    selected ? "none" : "2px solid rgba(46, 2, 73, 0.30)"};
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  font-family: Inter;
  font-size: 18px;
  font-weight: 500;

  color: ${(props) => (props.selected ? "white" : "#2E02494D")};
  background: ${(props) => (props.selected ? gradientBg : "none")};

  @media (min-width: 768px) {
    &:hover {
      background: ${gradientBg};
      color: white;
      border: ${({ selected }) => (selected ? "none" : "2px solid")};
    }
  }
`;

export const InputsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
`;

interface StyledInputsProps {
  $error?: boolean;
  $isFilled: boolean;
}

export const StyledInput = styled.input<StyledInputsProps>`
  padding: 8px 12px;
  margin-bottom: 20px;
  font-size: 14px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #b4a7bc;
  color: #b4a7bc;

  ${(props) =>
    props.$isFilled &&
    `
    color: #25094b;
    border-bottom-color: #25094b;
  `}

  ${(props) =>
    props.$error &&
    `
    color: red;
    border-bottom-color: red;
  `}

  &:focus {
    outline: none;
    color: #25094b;
    border-bottom-color: #25094b;

    &::placeholder {
      color: #25094b;
    }
  }

  &::placeholder {
    color: #b4a7bc;
  }
`;

export const TextArea = styled.textarea<StyledInputsProps>`
  padding: 8px 12px;
  margin-bottom: 20px;
  font-size: 14px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #b4a7bc;
  color: #b4a7bc;

  resize: vertical;

  height: 20px;

  min-height: 20px;
  max-height: 100px;

  ${(props) =>
    props.$isFilled &&
    `
    color: #25094b;
    border-bottom-color: #25094b;
  `}

  ${(props) =>
    props.$error &&
    `
    color: red;
    border-bottom-color: red;
  `}

  &:focus {
    outline: none;
    color: #25094b;
    border-bottom-color: #25094b;

    &::placeholder {
      color: #25094b;
    }
  }

  &::placeholder {
    color: #b4a7bc;
  }
`;

export const ButtonArrow = styled.img`
  width: 24px;

  @media (max-width: 380px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  outline: none;
  border-radius: 5px;

  min-width: 235px;

  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  align-items: center;
  gap: 15px;

  border-radius: 30px;

  color: #25094b;
  text-align: center;
  font-family: Inter;
  font-size: 18.667px;
  font-weight: 700;

  box-sizing: border-box;

  border: 2px solid rgba(46, 2, 73, 0.3);

  &:hover:not(:disabled) {
    background: linear-gradient(
      25deg,
      #ed9ac2 0%,
      #d24896 34.75%,
      #a559a3 57.88%,
      #4c489e 100.14%
    );

    color: white;

    border: 2px solid;
  }

  &:disabled {
    filter: brightness(20%);
    cursor: not-allowed;
  }
`;
