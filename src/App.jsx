import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import images from "./images.json";
import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

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
      <Portfolio images={images} visible={visible} loadMore={loadMore} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
