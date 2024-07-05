import s from "./MobileMenu.module.css";
const MobileMenu = ({ isOpen }) => {
  return (
    <div className={s.mobileMenu}>
      <div className={s.container}>
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
      </div>
    </div>
  );
};

export default MobileMenu;
