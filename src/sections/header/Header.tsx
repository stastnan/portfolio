import { Link as ScrollLink } from "react-scroll";

import ProfilePicture from "../../assets/profile-picture.jpg";
import { AppButton } from "../../ui/global-components/app-link, app-button/AppButton";
import AppSocialsLink from "../../ui/global-components/app-socials-link/AppSocialsLink";
import data from "./data";
import {
  HeaderContainer,
  HeaderImage,
  HeaderWrapper,
  ImageContainer,
  InfoContainer,
  MottoParagraph,
  NameHeading,
  SocialsContainer,
} from "./styled";

function Header() {
  return (
    <HeaderWrapper id="home">
      <HeaderContainer>
        <ImageContainer>
          <HeaderImage src={ProfilePicture} alt="Profile picture" />
        </ImageContainer>
        <NameHeading>Nikola Šťastná</NameHeading>
        <MottoParagraph>
          Transitioning into IT with a clear focus, I am on my way to becoming a
          front-end developer. My journey from another field to tech is driven
          by a passion for learning and a goal to build engaging websites.
        </MottoParagraph>
        <InfoContainer>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <AppButton variant="primary">Contact me</AppButton>
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <AppButton variant="light">My projects</AppButton>
          </ScrollLink>
        </InfoContainer>
      </HeaderContainer>
      <SocialsContainer>
        {data.map((item) => (
          <AppSocialsLink
            header={true}
            key={item.id}
            href={item.link}
            target="blank"
            rel="noopener noreferrer"
          >
            <item.Icon />
          </AppSocialsLink>
        ))}
      </SocialsContainer>
    </HeaderWrapper>
  );
}

export default Header;
