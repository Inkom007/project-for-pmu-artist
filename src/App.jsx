import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import images from "./images.js";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services.jsx";
import GetInTouch from "./components/GetInTouch/GetInTouch.jsx";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <>
      <Header toggleModal={toggleModal} modalIsOpen={modalIsOpen} />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio images={images} visible={visible} loadMore={loadMore} />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default App;
