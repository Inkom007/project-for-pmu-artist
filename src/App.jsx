import { useState } from "react";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <Hero />
      <AboutMe />
      <Services />
    </>
  );
};

export default App;
