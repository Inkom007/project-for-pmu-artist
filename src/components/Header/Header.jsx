import s from "./Header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.containerHeader}>
        <a className={s.logo}>
          Yuliko.<span className={s.logoAccent}>pmu</span>
        </a>
        <nav className={s.navigation}>
          <ul className={s.list}>
            <li>
              <a className={s.link}>About me</a>
            </li>
            <li>
              <a className={s.link}>Services</a>
            </li>
            <li>
              <a className={s.link}>Pricing</a>
            </li>
            <li>
              <a className={s.link}>Portfolio</a>
            </li>
            <li>
              <a className={s.link}>Contacts</a>
            </li>
          </ul>
        </nav>
        <button className={s.openMenuBtn}>
          <RxHamburgerMenu size={25} color="#7c252e" />
        </button>
      </div>
    </header>
  );
};

export default Header;
