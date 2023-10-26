import React, { useEffect, useState } from "react";
import {
  FormButton,
  ButtonGroupContainer,
  CloseButton,
  FormContainer,
  ModalBackdrop,
  ModalContent,
  StyledInput,
  TextArea,
  InputsContainer,
  Button,
  ButtonArrow,
  ButtonContainer,
} from "./FormModal.style";
import { H3 } from "../../App.style";
import closeIcon from "../../assets/contact/close.svg";
import buttonArrow from "../../assets/buttonFormArrow.png";

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

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<{
    phone: boolean;
    email: boolean;
    message: boolean;
  }>({ phone: false, email: false, message: false });

  function isValidNumber(value: string): boolean {
    const numberRegex = /^\d+$/; // Matches strings that contain only digits
    return numberRegex.test(value);
  }

  function isValidEmail(value: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(value);
  }

  useEffect(() => {
    const updateError = (field: keyof typeof errors, isValid: boolean) => {
      setErrors((prev) => ({
        ...prev,
        [field]: !isValid,
      }));
    };

    if (phone.length > 0) {
      const isNumber = phone.length > 8 && isValidNumber(phone);
      console.log(isNumber);
      updateError("phone", isNumber);
    } else {
      updateError("phone", true);
    }
  }, [phone]);

  useEffect(() => {
    const updateError = (field: keyof typeof errors, isValid: boolean) => {
      setErrors((prev) => ({
        ...prev,
        [field]: !isValid,
      }));
    };
    if (email.length > 0) {
      const isEmail = isValidEmail(email);
      updateError("email", isEmail);
    } else {
      updateError("email", true);
    }
  }, [email]);

  useEffect(() => {
    const updateError = (field: keyof typeof errors, isValid: boolean) => {
      setErrors((prev) => ({
        ...prev,
        [field]: !isValid,
      }));
    };
    if (message.length > 0) {
      const isLong = message.length > 10;
      updateError("message", isLong);
    } else {
      updateError("message", true);
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      phone_number: phone,
      message: message,
    };

    alert("dzieki!");
    console.log(data);
    onClose();
    clearForm();

    return false;
  };

  const clearForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const validateButton = () => {
    if (
      errors.email ||
      errors.message ||
      errors.phone ||
      email.length === 0 ||
      phone.length === 0 ||
      message.length === 0 ||
      name.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (!isOpen) return null;
  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent onClick={handleModalContentClick}>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="close-modal-button" />
        </CloseButton>

        <FormContainer onSubmit={handleSubmit}>
          <H3>Interesują mnie...</H3>
          <ButtonGroupContainer>
            {buttonOptions.map((option) => (
              <FormButton
                type={"button"}
                key={option.value}
                selected={option.value === selected}
                onClick={() => setSelected(option.value)}
              >
                {option.text}
              </FormButton>
            ))}
          </ButtonGroupContainer>

          <InputsContainer>
            <StyledInput
              $isFilled={name.length > 0}
              type="text"
              placeholder="Twoje imię*"
              maxLength={32}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <StyledInput
              $isFilled={phone.length > 0}
              $error={errors.phone}
              type="tel"
              placeholder="Numer telefonu*"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <StyledInput
              $isFilled={email.length > 0}
              $error={errors.email}
              type="email"
              placeholder="Adres e-mail*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextArea
              $isFilled={message.length > 0}
              $error={errors.message}
              placeholder="Twoja wiadomość* "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </InputsContainer>
          <ButtonContainer>
            <Button type={"submit"} disabled={validateButton()}>
              {!validateButton() && <ButtonArrow src={buttonArrow} />}
              {validateButton() ? "BRAKUJE INFORMACJI" : "WYŚLIJ WIADOMOŚĆ"}
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default FormModal;
