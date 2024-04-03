import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useScroll } from "../../context/scroll-context";
import {
  Description,
  Heading2,
  Heading3,
  Paragraph,
} from "../../ui/Typography";
import AppLink from "../../ui/global-components/app-link/AppLink";
import Card from "../../ui/global-components/card/Card";
import GeneralSection from "../../ui/global-components/general-section/GeneralSection";
import GeneralWrapper from "../../ui/global-components/general-wrapper/GeneralWrapper";
import { HeadingWrapper } from "../../ui/heading-wrapper/styled";
import { projects } from "./data";
import { LinksWrapper, PartWrapper, TitleWrapper, Wrapper } from "./styled";

function Portfolio() {
  const { sectionRefs } = useScroll();
  const portfolioRef = sectionRefs.portfolio;

  return (
    <GeneralSection bgcolor="dark" id="portfolio" ref={portfolioRef} block>
      <GeneralWrapper>
        <HeadingWrapper>
          <Heading2>Portfolio</Heading2>
          <Description>
            Explore a selection of my projects, showcasing my foundational
            technical skills, each tailored to meet industry standards.
          </Description>
        </HeadingWrapper>
        <Wrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
            style={{ background: "transparent" }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <Card white withoutShadow>
                  <TitleWrapper>
                    <Heading3>{project.title}</Heading3>
                  </TitleWrapper>
                  <PartWrapper>
                    <Paragraph>{project.description}</Paragraph>
                  </PartWrapper>
                  <LinksWrapper>
                    <AppLink
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source code
                    </AppLink>
                    <AppLink
                      variant="light"
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Project video
                    </AppLink>
                  </LinksWrapper>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </GeneralWrapper>
    </GeneralSection>
  );
}

export default Portfolio;
