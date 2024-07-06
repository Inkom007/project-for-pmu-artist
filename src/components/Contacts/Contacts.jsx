import s from "./Contacts.module.css";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const Contacts = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Contact me</h2>
      <ul className={s.contacts}>
        <li className={s.item}>
          <BsPhone size={20} color="#c3646e" />
          <a className={s.text} href="tel:+44 7737 327658">
            +(44) 7737 327658
          </a>
        </li>
        <li className={s.item}>
          <MdOutlineMarkEmailRead size={20} color="#c3646e" />
          <a className={s.text} href="mailto: inkom0703@gmail.com">
            inkom0703@gmail.com
          </a>
        </li>
        <li className={s.item}>
          <GoLocation size={20} color="#c3646e" />
          <a
            className={s.text}
            href="https://www.google.com/maps/search/South+Kensington,+Central+London+54+Walton+Street,+Central+London,+Greater+London,+SW3+1RB/@51.5053017,-0.1586197,14z/data=!3m1!4b1?entry=ttu"
          >
            Chelsea, SW3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
