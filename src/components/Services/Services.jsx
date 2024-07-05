import s from "./Services.module.css";
import brows from "../../assets/brows.jpg";
import lips from "../../assets/lips.jpg";
import eyeliner from "../../assets/eyeliner.jpg";

const Services = () => {
  return (
    <section className={s.container}>
      <h2 className={s.text}>What I do</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={brows} alt="brows" />
        </li>
        <li className={s.item}>
          <img src={lips} alt="brows" />
        </li>
        <li className={s.item}>
          <img src={eyeliner} alt="brows" />
        </li>
      </ul>
    </section>
  );
};

export default Services;
