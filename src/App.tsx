import { SetStateAction, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

import { useThemeContext } from "./context/theme-context";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Navigation from "./sections/navigation/Navigation";
import Portfolio from "./sections/portfolio/Portfolio";
import Technologies from "./sections/technologies/Technologies";
import Modal from "./ui/components/modal/Modal";
import { GlobalStyles } from "./ui/global";

function App() {
  const { theme } = useThemeContext();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSetActiveSection = (section: SetStateAction<string | null>) => {
    setActiveSection(section);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Modal />
      <Navigation setActiveSection={handleSetActiveSection} />
      <Header />
      <main>
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <FloatingNav setActiveSection={handleSetActiveSection} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
