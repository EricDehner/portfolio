import './App.css';
import React, { useEffect, useState } from "react"
import AboutMe from './components/SobreMi/SobreMi';
import Nav from './components/Nav/Nav';
import Certifications from './components/Certifications/Certifications';
import Proyects from './components/Proyects/Proyects';
import TopBtn from './components/TopBtn/TopBtn';
import Footer from './components/Footer/Footer';
import Contact from './components/Contacto/Contacto';
import Hero from './components/Hero/Hero';
import useDeviceSize from "./components/Resize/Resize";
import Menu from './components/Menu/Menu';

function App() {
  const [isVisibleBtn, setIsVisibleBtn] = useState(false);
  const [isVisibleIcons, setIsVisibleIcons] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const arrayWidth = useDeviceSize();
  const width = arrayWidth[0];

  useEffect(() => {
    if (width >= 425) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width, isMobile]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const scrollHandler = () => {
      const middleScreen = window.innerHeight / 2;
      const isScrollPastWindowHeight = window.scrollY > middleScreen;
      setIsVisibleBtn(isScrollPastWindowHeight);

      const fullHeight = document.body.scrollHeight - window.innerHeight;
      const isScrollAtMax = window.scrollY >= fullHeight - 28;
      setIsVisibleIcons(isScrollAtMax);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div id="top" className="App">
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Nav setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu setMenuOpen={setIsMenuOpen} onCloseClick={() => setIsMenuOpen(false)} />}
      </div>
      <Hero />
      <AboutMe />
      <Proyects />
      <Certifications />
      <Contact />
      <Footer isVisible={isVisibleIcons} />
      <TopBtn isVisible={isVisibleBtn} />
    </div>
  );
}

export default App;