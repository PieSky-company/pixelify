import { t } from "i18next";
import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarInnerContainer,
  LeftContainer,
  ProjectName,
  RightContainer,
  NavbarLinkContainer,
  NavItem,
  HamburgerContainer,
  Checkbox,
  HamburgerLines,
  Line,
  NavbarExtendedContainer,
} from "./Navbar.style";
import { H3 } from "../../App.style";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState<boolean>(false);

  const handleExtendNavbar = () => {
    setExtendNavbar((curr) => !curr);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (id: string) => {
    scrollToTarget(id);
  };

  const scrollToTarget = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setExtendNavbar(false);
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 120,
        behavior: "smooth",
      });
    }
  };
  return (
    <NavbarContainer $extendedNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer onClick={handleLogoClick}>
          <ProjectName>
            <H3>Pixelify</H3>
          </ProjectName>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavItem $hideOnMobile onClick={() => handleScroll("offers")}>
              <H3>oferta</H3>
            </NavItem>
            <NavItem $hideOnMobile onClick={() => handleScroll("about")}>
              <H3>o nas</H3>
            </NavItem>

            <NavItem $hideOnMobile onClick={() => handleScroll("contact")}>
              <H3>kontakt</H3>
            </NavItem>

            {/* <NavItem $hideOnMobile onClick={() => handleScroll("contact")}>
              <H3>napisz do nas</H3>
            </NavItem> */}

            <HamburgerContainer onClick={handleExtendNavbar}>
              <Checkbox checked={extendNavbar} readOnly />
              <HamburgerLines>
                <Line $top $open={extendNavbar} />
                <Line $middle $open={extendNavbar} />
                <Line $bottom $open={extendNavbar} />
              </HamburgerLines>
            </HamburgerContainer>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer isOpen={extendNavbar}>
          <NavItem onClick={() => handleScroll("about")}>
            <H3>oferta</H3>
          </NavItem>
          <NavItem onClick={() => handleScroll("offers")}>
            <H3>o nas</H3>
          </NavItem>
          <NavItem onClick={() => handleScroll("contact")}>
            <H3>kontakt</H3>
          </NavItem>
          <NavItem onClick={() => handleScroll("contact")}>
            <H3>portfolio</H3>
          </NavItem>
          6tp-y7,
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
