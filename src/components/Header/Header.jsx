import s from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "../MobileMenu/MobileMenu";
import logo from "/src/assets/logo_header.jpg";

const Header = ({ toggleModal, modalIsOpen }) => {
  return (
    <header className={s.header}>
      <div className={s.containerHeader}>
        <a className={s.logo}>
          <img className={s.logoImg} src={logo} />
        </a>
        <nav className={s.navigation}>
          <ul className={s.list}>
            <li>
              <a href="#AboutMe" className={s.link}>
                About me
              </a>
            </li>
            <li>
              <a href="#Services" className={s.link}>
                Services
              </a>
            </li>
            <li>
              <a href="#Portfolio" className={s.link}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#GetInTouch" className={s.link}>
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={toggleModal} className={s.openMenuBtn}>
          <RxHamburgerMenu size={25} color="#d7b47c" />
        </button>
        {modalIsOpen && <MobileMenu closeModal={toggleModal} />}
      </div>
    </header>
  );
};

export default Header;
