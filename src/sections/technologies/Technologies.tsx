import { v4 as uuid } from "uuid";

import { useScroll } from "../../context/scroll-context";
import { Description, Heading2, Heading4, Heading6 } from "../../ui/Typography";
import Card from "../../ui/global-components/card/Card";
import GeneralSection from "../../ui/global-components/general-section/GeneralSection";
import GeneralWrapper from "../../ui/global-components/general-wrapper/GeneralWrapper";
import { HeadingWrapper } from "../../ui/heading-wrapper/styled";
import { cards } from "./data";
import {
  IconsWrapper,
  ItalicHeading,
  PartWrapper,
  TitleWrapper,
  Wrapper,
} from "./styled";

function Technologies() {
  const { sectionRefs } = useScroll();
  const techRef = sectionRefs.technologies;
  return (
    <GeneralSection bgcolor="light" id="technologies" ref={techRef}>
      <GeneralWrapper>
        <HeadingWrapper>
          <Heading2>Technologies and skills</Heading2>
          <Description>
            Here's a look at the skills and technologies I'm working with,
            chosen to show how I can support your team as a new developer
          </Description>
        </HeadingWrapper>
        <Wrapper>
          {cards.map((card) => (
            <Card key={card.id}>
              <IconsWrapper>
                {card.icons.map((Icon) => (
                  <Icon key={uuid()} />
                ))}
              </IconsWrapper>

              <TitleWrapper>
                <Heading4>{card.heading}</Heading4>
                <ItalicHeading>{card.title}</ItalicHeading>
              </TitleWrapper>
              <PartWrapper>
                <Heading6>Technologies</Heading6>
                <ul>
                  {card.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </PartWrapper>
              <PartWrapper>
                <Heading6>Skills</Heading6>
                <ul>
                  {card.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </PartWrapper>
            </Card>
          ))}
        </Wrapper>
      </GeneralWrapper>
    </GeneralSection>
  );
}

export default Technologies;
