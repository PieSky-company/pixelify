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
import { H3, H4 } from "../../App.style";

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
        <LeftContainer>
          <ProjectName onClick={handleLogoClick}>
            <H3>Pixelify</H3>
          </ProjectName>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavItem $hideOnMobile onClick={() => handleScroll("offers")}>
              <H4>oferta</H4>
            </NavItem>
            <NavItem $hideOnMobile onClick={() => handleScroll("about")}>
              <H4>o nas</H4>
            </NavItem>

            <NavItem $hideOnMobile onClick={() => handleScroll("contact")}>
              <H4>kontakt</H4>
            </NavItem>

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
          <NavItem onClick={() => handleScroll("offers")}>
            <H3>oferta</H3>
          </NavItem>
          <NavItem onClick={() => handleScroll("about")}>
            <H3>o nas</H3>
          </NavItem>
          <NavItem onClick={() => handleScroll("contact")}>
            <H3>kontakt</H3>
          </NavItem>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
