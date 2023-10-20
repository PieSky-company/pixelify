import React, { useState } from "react";
import {
  ButtonG,
  ButtonGroupContainer,
  CloseButton,
  FormContainer,
  ModalBackdrop,
  ModalContent,
} from "./FormModal.style";
import { H3 } from "../../App.style";
import closeIcon from "../../assets/contact/close.svg";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  const handleBackdropClick = () => {
    onClose();
  };

  // Prevent modal content click from propagating to backdrop
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  type InterestedI = "web_pages" | "ads_campaign" | "socials" | "other";
  const [selected, setSelected] = useState<InterestedI>("web_pages");
  const buttonOptions: { text: string; value: InterestedI }[] = [
    { text: "Strony internetowe", value: "web_pages" },
    { text: "Kampanie reklamowe", value: "ads_campaign" },
    { text: "Prowadzenie profili SM", value: "socials" },
    { text: "Inne", value: "other" },
  ];

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent onClick={handleModalContentClick}>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="close-modal-button" />
        </CloseButton>

        <FormContainer>
          <H3>Interesują mnie...</H3>
          <ButtonGroupContainer>
            {buttonOptions.map((option) => (
              <ButtonG
                key={option.value}
                selected={option.value === selected}
                onClick={() => setSelected(option.value)}
              >
                {option.text}
              </ButtonG>
            ))}
          </ButtonGroupContainer>
        </FormContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default FormModal;
