import { IoIosColorPalette } from "react-icons/io";

import Logo from "../../assets/logo.jpg";
import { useModalContext } from "../../context/modal-context";
import { useScroll } from "../../context/scroll-context";
import data from "./data";
import {
  NavBarImage,
  NavbarContainer,
  NavbarLink,
  NavbarList,
  NavbarWrapper,
  ThemeButton,
} from "./styled";

interface Item {
  id: number;
  link: string;
  title: string;
}

function Navbar() {
  const { openModal } = useModalContext();
  const { sectionRefs } = useScroll();

  const scrollToSection = (sectionLink: string) => {
    const sectionRef = sectionRefs[sectionLink];
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLink href="">
          <NavBarImage src={Logo} alt="Logo" />
        </NavbarLink>
        <NavbarList>
          {data.map((item: Item) => (
            <li key={item.id}>
              <NavbarLink onClick={() => scrollToSection(item.link)}>
                {item.title}
              </NavbarLink>
            </li>
          ))}
        </NavbarList>
        <ThemeButton onClick={openModal}>
          <IoIosColorPalette />
        </ThemeButton>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
