import React from "react";
import {
  AboutContainer,
  AboutContentContainer,
  KrechaImg,
  TitleContainer,
} from "./About.style";
import { H2, H4 } from "../../App.style";
import krechaImg from "../../assets/about/krecha.png";

const About = () => {
  return (
    <AboutContainer>
      <KrechaImg src={krechaImg} />
      <TitleContainer>
        <H2>Jesteśmy tymi, którzy widzą potencjał w każdym pixelu.</H2>
      </TitleContainer>

      <AboutContentContainer>
        <H4>
          Twórcy, kreatorzy, innowatorzy, przekształcający idee w cyfrową
          rzeczywistość. W codziennej pracy łączymy kreatywność z nowoczesnymi
          technologiami, by dostarczać naszym klientom niepowtarzalne
          rozwiązania.
        </H4>

        <H4>
          Nasza drużyna to zespół ekspertów, dla których strony internetowe to
          nie tylko narzędzie, ale przede wszystkim sposób na wyrażanie i
          realizowanie wizji. Mamy w sobie pasję do kreacji i zrozumienie
          technologii, które umożliwiają nam tworzenie nie tylko stron, ale
          całych doświadczeń online.
        </H4>
      </AboutContentContainer>
    </AboutContainer>
  );
};

export default About;
