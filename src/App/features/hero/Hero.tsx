import React from "react";
import { HeroContainer, HeroIframe, TitleContainer } from "./Hero.style";
import { Button, H1 } from "../../App.style";
import bubblesSvg from "../../assets/bubbles.svg";

interface HeroProps {
  handleStopLoading: () => void;
}

const Hero: React.FC<HeroProps> = ({ handleStopLoading }) => {
  const handleStopLoadingZaChwile = () => {
    setTimeout(() => {
      handleStopLoading();
    }, 1000);
  };
  return (
    <HeroContainer>
      <HeroIframe
        title="hej"
        src="https://player.vimeo.com/video/884819709?h=57721ccc83&autoplay=1&loop=1&muted=1&background=1"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        onLoad={handleStopLoadingZaChwile}
      ></HeroIframe>

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

// 1:
// <iframe src="https://player.vimeo.com/video/884819709?h=57721ccc83" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
// 2:
// <iframe src="https://player.vimeo.com/video/884921518?h=2169fb7539" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
// 3:
// <iframe src="https://player.vimeo.com/video/885376198?h=f69da6294c" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
