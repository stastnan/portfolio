import { Heading6 } from "../../ui/Typography";
import AppSocialsLink from "../../ui/global-components/app-socials-link/AppSocialsLink";
import GeneralWrapper from "../../ui/global-components/general-wrapper/GeneralWrapper";
import data from "../header/data";
import { AppFooter, LinksWrapper, StyledHeading, Wrapper } from "./styled";

function Footer() {
  return (
    <AppFooter>
      <GeneralWrapper>
        <Wrapper>
          <StyledHeading>
            Checkout my GitHub for more code, follow me on social media or
            connect with me
          </StyledHeading>
          <LinksWrapper>
            {data.map((social) => (
              <AppSocialsLink
                key={social.id}
                href={social.link}
                target="blank"
                rel="noopener noreferrer"
              >
                <social.Icon />
              </AppSocialsLink>
            ))}
          </LinksWrapper>
        </Wrapper>
      </GeneralWrapper>
    </AppFooter>
  );
}

export default Footer;
