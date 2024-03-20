import CV from "../../assets/CV_placeholder.pdf";
import Placeholder from "../../assets/placeholder.jpg";
import { Heading2, Paragraph } from "../../ui/Typography";
import AppLink from "../../ui/global-components/app-link/AppLink";
import GeneralSection from "../../ui/global-components/general-section/GeneralSection";
import GeneralWrapper from "../../ui/global-components/general-wrapper/GeneralWrapper";
import {
  ImageWrapper,
  LinkContent,
  Portrait,
  TextWrapper,
  Wrapper,
} from "./styled";

import { HiDownload } from "react-icons/hi";

function About() {
  return (
    <GeneralSection bgcolor="dark" id="about">
      <GeneralWrapper>
        <Wrapper>
          <ImageWrapper>
            <Portrait src={Placeholder} alt="Profile picture" />
          </ImageWrapper>
          <TextWrapper>
            <Heading2>About me</Heading2>
            <Paragraph>
              I have a strong background in Environmental Science and currently
              work at the State Environmental Fund of the Czech Republic as a
              Methodologist. My job is really interesting because I get to work
              on different things like managing subsidies, helping with our
              information system, and talking to people across our company, with
              the government, and with the public. This experience has taught me
              a lot about how to handle different tasks, communicate well, and
              manage projects effectively.
            </Paragraph>
            <Paragraph>
              Alongside my current job, I've found a real love for front-end
              development. Since May 2023, I've been learning all I can about
              it. I'm excited about this field because it's always changing, and
              there's always something new to learn. My goal is to find my first
              job in front-end development where I can keep learning, growing,
              and doing what I love.
            </Paragraph>
            <AppLink variant="primary" download href={CV}>
              <LinkContent>
                <HiDownload /> Download CV
              </LinkContent>
            </AppLink>
          </TextWrapper>
        </Wrapper>
      </GeneralWrapper>
    </GeneralSection>
  );
}

export default About;
