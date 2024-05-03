import { HiDownload } from "react-icons/hi";

import CV_CZ from "../../assets/CV_placeholder_CZ.pdf";
import CV_EN from "../../assets/CV_placeholder_EN.pdf";
import Hiring from "../../assets/storyset-hire.png";
import { AppLink } from "../../ui/components/app-link/AppLink";
import GeneralSection from "../../ui/components/general-section/GeneralSection";
import GeneralWrapper from "../../ui/components/general-wrapper/GeneralWrapper";
import { Heading2, Paragraph } from "../../ui/typography";
import {
  AppLinksWrapper,
  HireImage,
  ImageWrapper,
  LinkContent,
  TextWrapper,
  Wrapper,
} from "./styled";

function About() {
  return (
    <GeneralSection bgcolor="dark" id="about">
      <GeneralWrapper>
        <Wrapper>
          <ImageWrapper>
            <HireImage
              src={Hiring}
              alt="Job illustrations by Storyset"
            ></HireImage>
            <a
              href="https://storyset.com/job"
              style={{ display: "hidden" }}
            ></a>
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
            <AppLinksWrapper>
              <AppLink variant="primary" download href={CV_EN}>
                <LinkContent>
                  <HiDownload /> Download CV (EN)
                </LinkContent>
              </AppLink>
              <AppLink variant="light" download href={CV_CZ}>
                <LinkContent>
                  <HiDownload /> Download CV (CZ)
                </LinkContent>
              </AppLink>
            </AppLinksWrapper>
          </TextWrapper>
        </Wrapper>
      </GeneralWrapper>
    </GeneralSection>
  );
}

export default About;
