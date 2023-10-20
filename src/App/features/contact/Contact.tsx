import React from "react";
import {
  ContactContainer,
  ContactContentContainer,
  LogoImg,
} from "./Contact.style";
import logo from "../../assets/contact/logo.png";
import { Button, H2, H3 } from "../../App.style";

interface ContactProps {
  showFormModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ showFormModal }) => {
  return (
    <ContactContainer>
      <LogoImg src={logo} />

      <ContactContentContainer>
        <H2>Skontaktuj się z nami</H2>

        <H3>
          Gotowy na przyszłość w pełni pikseli? Skontaktuj się z nami już dziś!
          Nasz zespół chętnie odpowie na wszystkie Twoje pytania i pomoże Ci
          stworzyć strategię cyfrową idealnie dopasowaną do Twojej firmy.
          Czekamy na Ciebie z zapałem, gotowi przekształcić Twoje wizje w
          rzeczywistość. Twój biznes. Twoja wizja. Nasze pixele. Razem,
          stworzymy coś wyjątkowego.
        </H3>

        <Button onClick={showFormModal}>FORMULARZ KONTAKTOWY</Button>
      </ContactContentContainer>
    </ContactContainer>
  );
};

export default Contact;
