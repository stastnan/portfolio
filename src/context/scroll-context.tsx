import React, { createContext, useContext, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<{ sectionRefs: SectionRefs } | undefined>(
  undefined,
);

export const ScrollProvider = ({ children }: Props) => {
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    technologies: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("Something went wrong");
  }
  return context;
};
