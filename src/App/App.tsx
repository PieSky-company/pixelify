import React, { useEffect, useState } from "react";
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
import Loading from "./features/loading/Loading";
import FormModal from "./features/formModal/FormModal";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);

  const showFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => setIsFormModalOpen(false);
  return (
    <AppContainer>
      {loading && <Loading />}

      <FormModal isOpen={isFormModalOpen} onClose={closeFormModal} />

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
        <Contact showFormModal={showFormModal} />
      </Section>

      <Footer />
    </AppContainer>
  );
}

export default App;
