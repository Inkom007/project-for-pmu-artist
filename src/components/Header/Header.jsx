import s from "./Header.module.css";

const Header = ({ handleOpenModal }) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a className={s.logo}>
          Yuliko.<span className={s.logoAccent}>pmu</span>
        </a>

        <nav className={s.navigation}>
          <button onClick={handleOpenModal} className={s.openMenuBtn}>
            <span className={s.burgerLine}></span>
            <span className={s.burgerLine}></span>
            <span className={s.burgerLine}></span>
          </button>

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
      </div>
    </header>
  );
};

export default Header;
