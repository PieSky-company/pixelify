import styled from "styled-components";

const fontColor = "white";

interface NavbarProps {
  $extendedNavbar: boolean;
}
export const NavbarContainer = styled.nav<NavbarProps>`
  width: 100%;
  height: ${(props) => (props.$extendedNavbar ? "470px" : "80px")};
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => (props.$extendedNavbar ? "black" : "transparent")};
  border-bottom: ${(props) =>
    props.$extendedNavbar
      ? "1px solid rgba(128, 128, 128, 1)"
      : "1px solid rgba(128, 128, 128, 0)"};
  position: fixed;
  top: 0px;
  padding: 0px 10px;
  z-index: 1000;

  overflow: ${(props) => (props.$extendedNavbar ? "hidden" : "")};

  transition: height 0.5s ease-in-out, border-bottom 0.5s ease-in-out;

  @media (min-width: 640px) {
    padding: 0px 30px;
  }

  @media (min-width: 1000px) {
    height: 80px;
    padding: 0px 50px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  gap: 5px;

  align-items: center;

  cursor: pointer;
`;

export const ProjectName = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  max-width: 2000px;
  min-height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

interface NavItemProps {
  $hideOnMobile?: boolean;
}

export const NavItem = styled.a<NavItemProps>`
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  text-decoration: none;
  color: white;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    visibility: visible;
    width: 100%;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1000px) {
    display: ${(props) => (props.$hideOnMobile ? "none" : "block")};
    margin: ${(props) => (props.$hideOnMobile ? "" : "20px 0px")};
  }
`;

export const UserPopoverContainer = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavbarButton = styled.button`
  background: ${fontColor};
  font-family: "Exo", sans-serif;
  font-size: 15px;
  border-radius: 8px;
  width: 120px;
  height: 30px;
  color: white;
  font-weight: 500;

  margin-left: 20px;

  &:hover {
    -webkit-box-shadow: 0px 0px 26px 0px rgba(0, 109, 255, 1);
    -moz-box-shadow: 0px 0px 26px 0px rgba(0, 109, 255, 1);
    box-shadow: 0px 0px 26px 0px rgba(0, 109, 255, 1);
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavbarButtonExtended = styled.button`
  background: ${fontColor};
  font-family: "Montserrat";
  font-size: 14px;
  border-radius: 20px;
  width: 120px;
  height: 30px;
  color: white;
  font-weight: 500;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: 60px;
`;

export const NavbarExtendedContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;

  background: transparent;

  @media (min-width: 1000px) {
    display: none;
  }
`;

//hamberger

export const HamburgerContainer = styled.button`
  width: 40px;
  height: 60px;
  cursor: pointer;
  position: relative;

  border-radius: 8px;
  border: none;
  background: transparent;

  margin-right: 25px;

  @media (min-width: 1000px) {
    display: none;
  }

  @media (max-width: 640px) {
    color: ${fontColor};
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
`;

export const HamburgerLines = styled.div`
  position: absolute;
  top: 17px;
  left: 20px;
  width: 32px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Line = styled.span<{
  $top?: boolean;
  $middle?: boolean;
  $bottom?: boolean;
  $open: boolean;
}>`
  height: 4px;
  width: 100%;
  background: #eff0f7;
  border-radius: 10px;
  transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;
  transform-origin: ${(props) =>
    props.$top ? "0% 0%" : props.$bottom ? "0% 100%" : "center"};

  ${(props) => props.$middle && props.$open && "opacity: 0;"}
  ${(props) => props.$top && props.$open && "transform: rotate(45deg);"}
  ${(props) => props.$bottom && props.$open && "transform: rotate(-45deg);"}
`;
