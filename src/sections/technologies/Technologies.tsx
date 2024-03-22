import { Heading2, Heading4, Heading6 } from "../../ui/Typography";
import GeneralSection from "../../ui/global-components/general-section/GeneralSection";
import GeneralWrapper from "../../ui/global-components/general-wrapper/GeneralWrapper";
import { cards } from "./data";
import {
  Card,
  HeadingWrapper,
  IconsWrapper,
  ItalicHeading,
  PartWrapper,
  TitleWrapper,
  Wrapper,
} from "./styled";

import { v4 as uuid } from "uuid";

function Technologies() {
  return (
    <GeneralSection bgcolor="light" id="technologies">
      <GeneralWrapper>
        <HeadingWrapper>
          <Heading2>Technologies and skills</Heading2>
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
