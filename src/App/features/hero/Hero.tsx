import React from "react";
import { HeroContainer, TitleContainer } from "./Hero.style";
import { Button, H1 } from "../../App.style";

const Hero = () => {
  return (
    <HeroContainer>
      <TitleContainer>
        <H1>Gotowy, aby</H1>
        <H1> przekształcić pixele w możliwości?</H1>
      </TitleContainer>
      <Button>DOWIEDZ SIĘ WIĘCEJ</Button>
    </HeroContainer>
  );
};

export default Hero;
