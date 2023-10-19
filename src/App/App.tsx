import React from "react";
import { AppContainer } from "./App.style";
import Hero from "./features/hero/Hero";
import Navbar from "./features/navbar/Navbar";
import Section from "./features/Section";
import Offers from "./features/offers/Offers";
import Break from "./features/break/Break";
import About from "./features/about/About";
import WhyUs from "./features/whyus/Whyus";
import Contact from "./features/contact/Contact";
import Footer from "./features/footer/Footer";

function App() {
  return (
    <AppContainer>
      <Navbar />

      <Hero />

      <Section id={"offers"}>
        <Offers />
      </Section>

      <Break />

      <Section id={"about"}>
        <About />
      </Section>

      <Section id={"why_us"}>
        <WhyUs />
      </Section>

      <Section id={"contact"}>
        <Contact />
      </Section>

      <Footer />
    </AppContainer>
  );
}

export default App;
