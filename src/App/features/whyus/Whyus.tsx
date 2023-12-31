import React from "react";
import {
  DescriptionContainer,
  WhyusContainer,
  WhyusContent,
  WhyusContentContainer,
  WhyusImage,
} from "./Whyus.style";
import { ColoredSpan, H2, H3, H4 } from "../../App.style";
import brainImg from "../../assets/why_us/brain.svg";
import aimImg from "../../assets/why_us/aim.svg";
import mountainImg from "../../assets/why_us/mountain.svg";

const Whyus = () => {
  return (
    <WhyusContainer>
      <H2>Dlaczego my?</H2>

      <WhyusContentContainer>
        <WhyusContent>
          <WhyusImage src={brainImg} />
          <H3>
            <ColoredSpan>Kompleksowe rozwiązania</ColoredSpan>
          </H3>
          <DescriptionContainer>
            <H4>
              Dostosowane do Twojej wizji, zapewniające kompleksowe wsparcie
              cyfrowe.
            </H4>
          </DescriptionContainer>
        </WhyusContent>

        <WhyusContent>
          <WhyusImage src={aimImg} />
          <H3>
            <ColoredSpan>Twój Sukces, Nasz Cel</ColoredSpan>
          </H3>
          <DescriptionContainer>
            <H4>Tworzymy doświadczenia online, które napędzają Twój biznes.</H4>
          </DescriptionContainer>
        </WhyusContent>

        <WhyusContent>
          <WhyusImage src={mountainImg} />
          <H3>
            <ColoredSpan>Ciągłe Doskonalenie</ColoredSpan>
          </H3>
          <DescriptionContainer>
            <H4>
              Innowacje i nauka są naszą siłą - dla Ciebie, dla Twojego sukcesu.
            </H4>
          </DescriptionContainer>
        </WhyusContent>
      </WhyusContentContainer>
    </WhyusContainer>
  );
};

export default Whyus;
