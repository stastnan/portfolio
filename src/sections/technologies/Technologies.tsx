import { useRef } from "react";

import { LazyMotion, domAnimation, useInView } from "framer-motion";

import Card from "../../ui/components/card/Card";
import { CustomWrapper } from "../../ui/components/custom-wrapper/styled";
import GeneralSection from "../../ui/components/general-section/GeneralSection";
import GeneralWrapper from "../../ui/components/general-wrapper/GeneralWrapper";
import { Description, Heading2, Heading4, Heading6 } from "../../ui/typography";
import { cards } from "./data";
import {
  CardsWrapper,
  CustomList,
  IconsWrapper,
  ItalicHeading,
  ListElementSkill,
  ListElementTech,
  PartWrapper,
  TitleWrapper,
  Wrapper,
} from "./styled";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.5,
    },
  }),
};

function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <GeneralSection bgcolor="light" id="technologies">
      <LazyMotion features={domAnimation}>
        <GeneralWrapper>
          <CustomWrapper>
            <Heading2>Technologies and skills</Heading2>
            <Description>
              Here's a look at the skills and technologies I'm working with,
              chosen to show how I can support your team as a new developer.
            </Description>
          </CustomWrapper>

          <Wrapper ref={ref}>
            {cards.map((card, index) => (
              <CardsWrapper
                key={card.id}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index} // needed for the delay in
              >
                <Card>
                  <IconsWrapper>
                    {card.icons.map((Icon) => (
                      <Icon.icon key={Icon.id} />
                    ))}
                  </IconsWrapper>

                  <TitleWrapper>
                    <Heading4>{card.heading}</Heading4>
                    <ItalicHeading>{card.title}</ItalicHeading>
                  </TitleWrapper>
                  <PartWrapper>
                    <Heading6>Technologies</Heading6>
                    <CustomList>
                      {card.technologies.map((tech) => (
                        <ListElementTech key={tech}>{tech}</ListElementTech>
                      ))}
                    </CustomList>
                  </PartWrapper>
                  <PartWrapper>
                    <Heading6>Skills</Heading6>
                    <CustomList>
                      {card.skills.map((skill) => (
                        <ListElementSkill key={skill}>{skill}</ListElementSkill>
                      ))}
                    </CustomList>
                  </PartWrapper>
                </Card>
              </CardsWrapper>
            ))}
          </Wrapper>
        </GeneralWrapper>
      </LazyMotion>
    </GeneralSection>
  );
}

export default Technologies;
