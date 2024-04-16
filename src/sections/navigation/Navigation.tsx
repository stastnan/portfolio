import { useEffect } from "react";

import { IoIosColorPalette } from "react-icons/io";
import { Events, scrollSpy } from "react-scroll";

import Logo from "../../assets/logo.jpg";
import { useModalContext } from "../../context/modal-context";
import { NAVBAR_HEIGHT_PX } from "../../ui/ui-constants";
import data from "./data";
import {
  NavBarImage,
  NavbarContainer,
  NavbarList,
  NavbarWrapper,
  NavigationPictureLink,
  StyledNavbarLink,
  ThemeButton,
} from "./styled";

interface Item {
  id: number;
  link: string;
  title: string;
}

interface NavbarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveSection }) => {
  const { openModal } = useModalContext();

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    const handleSetActive = (to: string) => {
      setActiveSection(to);
    };
    scrollSpy.update();
    Events.scrollEvent.register("activate", handleSetActive);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      Events.scrollEvent.remove("activate");
    };
  }, []);

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavigationPictureLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-NAVBAR_HEIGHT_PX}
          duration={400}
        >
          <NavBarImage src={Logo} alt="Logo" />
        </NavigationPictureLink>
        <NavbarList>
          {data.map((item: Item) => (
            <StyledNavbarLink
              key={item.id}
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-NAVBAR_HEIGHT_PX}
              duration={400}
              activeStyle={{ color: "black" }}
            >
              {item.title}
            </StyledNavbarLink>
          ))}
        </NavbarList>
        <ThemeButton onClick={openModal}>
          <IoIosColorPalette />
        </ThemeButton>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
