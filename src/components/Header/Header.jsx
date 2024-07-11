import s from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = ({ toggleModal, modalIsOpen }) => {
  return (
    <header className={s.header}>
      <div className={s.containerHeader}>
        <a className={s.logo}>
          Yuliko.<span className={s.logoAccent}>pmu</span>
        </a>
        <nav className={s.navigation}>
          <ul className={s.list}>
            <li>
              <a href="#AboutMe" className={s.link}>
                About me
              </a>
            </li>
            <li>
              <a href="#Portfolio" className={s.link}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#ContactForm" className={s.link}>
                Contact Form
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={toggleModal} className={s.openMenuBtn}>
          <RxHamburgerMenu size={25} color="#7c252e" />
        </button>
        {modalIsOpen && <MobileMenu closeModal={toggleModal} />}
      </div>
    </header>
  );
};

export default Header;
