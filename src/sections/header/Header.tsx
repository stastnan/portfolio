import ProfilePicture from "../../assets/profile-picture.jpg";
import AppLink from "../../ui/global-components/app-link/AppLink";
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
  SocialsLink,
} from "./styled";

function Header() {
  return (
    <HeaderWrapper id="header">
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
          <AppLink variant="primary" href="#contact">
            Contact me
          </AppLink>
          <AppLink variant="light" href="#portfolio">
            My projects
          </AppLink>
        </InfoContainer>
      </HeaderContainer>
      <SocialsContainer>
        {data.map((item) => (
          <SocialsLink
            key={item.id}
            href={item.link}
            target="blank"
            rel="noopener noreferrer"
          >
            <item.icon />
          </SocialsLink>
        ))}
      </SocialsContainer>
    </HeaderWrapper>
  );
}

export default Header;
