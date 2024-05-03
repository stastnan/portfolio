import ContactImg from "@assets/storyset-contact.png";

import GeneralSection from "../../ui/components/general-section/GeneralSection";
import GeneralWrapper from "../../ui/components/general-wrapper/GeneralWrapper";
import { Heading2 } from "../../ui/typography";
import data from "./data";
import {
  Animation,
  AnimationWrapper,
  ContactImage,
  ContentWrapper,
  Link,
  Wrapper,
} from "./styled";

function Contact() {
  return (
    <GeneralSection bgcolor={"light"} id="contact" name="contact">
      <GeneralWrapper>
        <ContentWrapper>
          <Heading2>Contact me</Heading2>
          <ContactImage
            src={ContactImg}
            alt="Contact illustration by Storyset "
          />
          <a href="https://storyset.com/work" style={{ display: "hidden" }} />
          <AnimationWrapper>
            <Animation
              sequence={[
                "Let's connect! Reach out to me on any of the platforms below if you're interested in \n job opportunities",
                1500,
                "Let's connect! Reach out to me on any of the platforms below if you're interested in \n collaborations",
                1500,
                "Let's connect! Reach out to me on any of the platforms below if you're interested in \n chatting about potential projects",
                1500,
                () => {},
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                display: "inline-block",
              }}
            ></Animation>
          </AnimationWrapper>
        </ContentWrapper>
        <Wrapper>
          {data.map((contact) => (
            <Link
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.Icon />
            </Link>
          ))}
        </Wrapper>
      </GeneralWrapper>
    </GeneralSection>
  );
}

export default Contact;
