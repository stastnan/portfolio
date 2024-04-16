import { Description, Heading2 } from "../../ui/Typography";
import GeneralSection from "../../ui/global-components/general-section/GeneralSection";
import GeneralWrapper from "../../ui/global-components/general-wrapper/GeneralWrapper";
import { HeadingWrapper } from "../../ui/heading-wrapper/styled";
import data from "./data";
import { Link, Wrapper } from "./styled";

function Contact() {
  return (
    <GeneralSection bgcolor={"light"} id="contact">
      <GeneralWrapper>
        <HeadingWrapper>
          <Heading2>Contact me</Heading2>
          <Description>
            Feel free to connect with me on any of the platforms below if you're
            exploring job opportunities, seeking collaborations, or wish to
            discuss potential projects
          </Description>
        </HeadingWrapper>
        <Wrapper>
          {data.map((contact) => (
            <Link
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.icon />
            </Link>
          ))}
        </Wrapper>
      </GeneralWrapper>
    </GeneralSection>
  );
}

export default Contact;
