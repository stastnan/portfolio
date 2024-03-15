import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Navigation from "./sections/navigation/Navigation";
import Portfolio from "./sections/portfolio/Portfolio";
import Technologies from "./sections/technologies/Technologies";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
