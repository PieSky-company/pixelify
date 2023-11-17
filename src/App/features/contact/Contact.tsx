import React from "react";
import {
  ContactContainer,
  ContactContentContainer,
  ContactIFrame,
  LogoImg,
} from "./Contact.style";
import logo from "../../assets/pixelify-logo.svg";
import { Button, H2, H3 } from "../../App.style";

interface ContactProps {
  showFormModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ showFormModal }) => {
  return (
    <ContactContainer>
      <ContactIFrame
        title="hej"
        src="https://player.vimeo.com/video/885376198?h=f69da6294c&autoplay=1&loop=1&muted=1&background=1"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></ContactIFrame>
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
