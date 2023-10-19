import React, { useEffect, useState } from "react";
import {
  OffersContainer,
  OffersContent,
  OffersContentContainer,
  OffersIcon,
  TextContainer,
} from "./Offers.style";
import { ColoredSpan, H2, H3, H5 } from "../../App.style";
import webIcon from "../../assets/offers/web.svg";
import marketingIcon from "../../assets/offers/marketing.svg";

const Offers = () => {
  const [isTextExpandedWeb, setIsTextExpandedWeb] = useState(false);
  const [isTextExpandedMarketing, setIsTextExpandedMarketing] = useState(false);

  const handleWebTextClick = () => setIsTextExpandedWeb((prev) => !prev);
  const handleMarketingTextClick = () =>
    setIsTextExpandedMarketing((prev) => !prev);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <OffersContainer>
      <H2>W czym możemy Ci pomóc?</H2>

      <OffersContentContainer>
        <OffersContent>
          <OffersIcon src={webIcon} alt={"website-icon"} />
          <H3>
            <ColoredSpan>Strony internetowe</ColoredSpan>
          </H3>
          <TextContainer>
            <H5>
              {isTextExpandedWeb || windowWidth >= 768
                ? `Specjalizujemy się w projektowaniu i programowaniu stron WWW,
                portali, serwisów internetowych oraz Landing Page, oferując szeroki
                zakres opcji dostosowanych do indywidualnych potrzeb klienta - od
                prostych stron w jednym języku, do zaawansowanych rozwiązań z
                wielojęzyczną obsługą i dodatkowymi modułami.`
                : `Specjalizujemy się w projektowaniu i programowaniu stron WWW,
                portali, serwisów internetowych oraz Landing Page, oferując szeroki
                zakres opcji dostosowanych do indywidualnych potrzeb klienta ...`}
            </H5>
            {windowWidth < 768 && (
              <button onClick={handleWebTextClick}>
                {isTextExpandedWeb ? "<Zwiń" : "Rozwiń>"}
              </button>
            )}
          </TextContainer>
        </OffersContent>

        <OffersContent>
          <OffersIcon src={marketingIcon} alt={"marketing-icon"} />
          <H3>
            <ColoredSpan>Marketing</ColoredSpan>
          </H3>
          <TextContainer>
            <H5>
              {isTextExpandedMarketing || windowWidth >= 768
                ? `Oferujemy kompleksowe usługi marketingowe w mediach społecznościowych i w sieci, od zarządzania profilami na Facebooku i Instagramie, po skrojone na miarę kampanie reklamowe w Facebook Ads i Google Ads, aż po optymalizację wizytówki Google dla maksymalnej widoczności Twojej firmy.`
                : `Oferujemy kompleksowe usługi marketingowe w mediach społecznościowych i w sieci, od zarządzania profilami na Facebooku i Instagramie, po skrojone na miarę kampanie reklamowe w ...`}
            </H5>
            {windowWidth < 768 && (
              <button onClick={handleMarketingTextClick}>
                {isTextExpandedWeb ? "<Zwiń" : "Rozwiń>"}
              </button>
            )}
          </TextContainer>
        </OffersContent>
      </OffersContentContainer>
    </OffersContainer>
  );
};

export default Offers;
