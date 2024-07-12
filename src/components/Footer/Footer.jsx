import s from "./Footer.module.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import logo from "/assets/logo_footer.jpg";

const Footer = () => {
  return (
    <footer>
      <div className={s.container}>
        <img className={s.logo} src={logo} />
        <div className={s.linksContainer}>
          <a href="https://www.facebook.com/YulikoPermanent" target="blank">
            <FaSquareFacebook size={20} color="#D7B47C" />
          </a>
          <a href="https://www.instagram.com/yuliko_pmu/" target="blank">
            <AiFillInstagram size={20} color="#D7B47C" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=447506669604"
            target="blank"
          >
            <IoLogoWhatsapp size={20} color="#D7B47C" />
          </a>
          <a href="https://t.me/yuliko_pmu" target="blank">
            <SiTelegram size={20} color="#D7B47C" />
          </a>
          <a href="https://www.tiktok.com/@yuliko_pmu" target="blank">
            <AiFillTikTok size={20} color="#D7B47C" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
