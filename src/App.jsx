import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import images from "./images.json";
import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <>
      <Header />
      <MobileMenu />
      <Hero />
      <AboutMe />
      <Portfolio
        src={images.src}
        alt={images.alt}
        images={images}
        visible={visible}
        loadMore={loadMore}
      />
      <ContactForm />
    </>
  );
};

export default App;
