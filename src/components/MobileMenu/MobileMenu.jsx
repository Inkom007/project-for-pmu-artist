import s from "./MobileMenu.module.css";
import { IoCloseOutline } from "react-icons/io5";

const MobileMenu = ({ closeModal }) => {
  return (
    <div onClick={closeModal} className={s.mobileMenu}>
      <div className={s.container}>
        <button onClick={closeModal} className={s.closeBtn}>
          <IoCloseOutline size={20} color="#d7b47c" />
        </button>
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
      </div>
    </div>
  );
};

export default MobileMenu;
