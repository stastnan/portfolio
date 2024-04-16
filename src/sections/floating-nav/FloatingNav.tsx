import { useEffect } from "react";

import { Events, scrollSpy } from "react-scroll";

import { NAVBAR_HEIGHT_PX } from "../../ui/ui-constants";
import { data } from "./data";
import {
  IconLink,
  LinkWrapper,
  ListWrapper,
  NavigationLink,
  Wrapper,
} from "./styled";

interface Props {
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}

function FloatingNav({ setActiveSection }: Props) {
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    const handleSetActive = (to: string) => {
      setActiveSection(to);
    };
    scrollSpy.update();
    Events.scrollEvent.register("activate", handleSetActive);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      Events.scrollEvent.remove("activate");
    };
  }, []);

  return (
    <Wrapper>
      <ListWrapper>
        {data.map((item) => (
          <LinkWrapper key={item.id}>
            <NavigationLink
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-NAVBAR_HEIGHT_PX}
              duration={500}
              activeStyle={{ color: "black" }}
            >
              <IconLink>
                <item.Icon />
              </IconLink>
            </NavigationLink>
          </LinkWrapper>
        ))}
      </ListWrapper>
    </Wrapper>
  );
}

export default FloatingNav;
