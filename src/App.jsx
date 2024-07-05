import { useState } from "react";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <MobileMenu handleOpenModal={handleOpenModal} isOpen={isOpen} />
      <Hero />
      <AboutMe />
    </>
  );
};

export default App;
