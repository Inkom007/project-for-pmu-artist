import s from "./Footer.module.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className={s.container}>
        <a className={s.logo}>
          Yuliko.<span className={s.logoAccent}>pmu</span>
        </a>
        <div className={s.linksContainer}>
          <a href="https://www.facebook.com/YulikoPermanent" target="blank">
            <FaSquareFacebook size={20} color="#daaaae" />
          </a>
          <a href="https://www.instagram.com/yuliko_pmu/" target="blank">
            <AiFillInstagram size={20} color="#daaaae" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=447506669604"
            target="blank"
          >
            <IoLogoWhatsapp size={20} color="#daaaae" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
