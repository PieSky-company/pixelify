import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterIcon,
  FooterIconsContainer,
} from "./Footer.style";
import { H4 } from "../../App.style";
import fbIcon from "../../assets/footer/fb.svg";
import igIcon from "../../assets/footer/ig.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <H4>EMAIL</H4>
        <H4>kontakt@pixelify.pl</H4>
      </FooterContent>
      <FooterContent>
        <H4>TELEFON</H4>
        <H4>519 610 240</H4>
      </FooterContent>
      <FooterContent>
        <H4>SOCIAL MEDIA</H4>
        <FooterIconsContainer>
          <FooterIcon
            onClick={() => alert("na chuj tu klikasz?")}
            src={fbIcon}
          />
          <FooterIcon
            onClick={() => alert("a tu kurwa po co XD?")}
            src={igIcon}
          />
        </FooterIconsContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
