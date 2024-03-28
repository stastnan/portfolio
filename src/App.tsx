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
import { GlobalStyles } from "./ui/Global";
import Modal from "./ui/global-components/modal/Modal";

function App() {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Modal />
      <Navigation />
      <Header />
      <main>
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
