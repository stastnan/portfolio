import { useRef } from "react";

import { LazyMotion, domAnimation, m, useInView } from "framer-motion";

import Card from "../../ui/components/card/Card";
import { CustomWrapper } from "../../ui/components/custom-wrapper/styled";
import GeneralSection from "../../ui/components/general-section/GeneralSection";
import GeneralWrapper from "../../ui/components/general-wrapper/GeneralWrapper";
import { Description, Heading2, Heading4, Heading6 } from "../../ui/typography";
import { cards } from "./data";
import {
  CardsWrapper,
  IconsWrapper,
  ItalicHeading,
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
    <GeneralSection bgcolor="light" id="technologies" ref={ref}>
      <LazyMotion features={domAnimation}>
        <GeneralWrapper>
          <CustomWrapper>
            <Heading2>Technologies and skills</Heading2>
            <Description>
              Here's a look at the skills and technologies I'm working with,
              chosen to show how I can support your team as a new developer.
            </Description>
          </CustomWrapper>

          <Wrapper>
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
              </CardsWrapper>
            ))}
          </Wrapper>
        </GeneralWrapper>
      </LazyMotion>
    </GeneralSection>
  );
}

export default Technologies;
