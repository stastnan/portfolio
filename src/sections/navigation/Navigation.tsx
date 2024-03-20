import Logo from "../../assets/logo.jpg";
import data from "./data";
import {
  NavBarImage,
  NavbarContainer,
  NavbarLink,
  NavbarList,
  NavbarWrapper,
  ThemeButton,
} from "./styled";

import { IoIosColorPalette } from "react-icons/io";

interface Item {
  id: number;
  link: string;
  title: string;
}

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLink href="">
          <NavBarImage src={Logo} alt="Logo" />
        </NavbarLink>
        <NavbarList>
          {data.map((item: Item) => (
            <li key={item.id}>
              <NavbarLink href={item.link}>{item.title}</NavbarLink>
            </li>
          ))}
        </NavbarList>
        <ThemeButton>
          <IoIosColorPalette />
        </ThemeButton>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
