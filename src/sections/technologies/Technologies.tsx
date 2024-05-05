import { useEffect, useRef, useState } from "react";

import { LazyMotion, domAnimation, useInView } from "framer-motion";

import { breakpoints } from "@ui/breakpoints";

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

function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState("down");
  const isMobile = window.innerWidth <= breakpoints.lg;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isMobile
          ? scrollDirection === "down"
            ? index * 0.3
            : (cards.length - 1 - index) * 0.3
          : index * 0.3,
        duration: 0.5,
      },
    }),
  };

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
                custom={index} // needed for the animation delay
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
