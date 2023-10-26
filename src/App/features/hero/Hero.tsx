import React from "react";
import { HeroContainer, TitleContainer } from "./Hero.style";
import { Button, H1 } from "../../App.style";
import bubblesSvg from "../../assets/bubbles.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <TitleContainer>
        <H1>Gotowy, aby</H1>
        <H1> przekształcić pixele w możliwości?</H1>
        <img src={bubblesSvg} alt="Bubble" className="bubble-svg" />
      </TitleContainer>
      <Button>DOWIEDZ SIĘ WIĘCEJ</Button>
    </HeroContainer>
  );
};

export default Hero;
