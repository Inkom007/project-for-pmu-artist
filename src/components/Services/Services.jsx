import s from "./Services.module.css";
import brows from "/src/assets/brows.png";
import lips from "/src/assets/lips.png";
import eyeliner from "/src/assets/eyeliner.png";

const Services = () => {
  return (
    <div className={s.container} id="Services">
      <h2 className={s.title}> Services</h2>
      <ul className={s.list}>
        <li>
          <img className={s.img} src={brows} />
          <p className={s.text}>Eyebrows</p>
        </li>
        <li>
          <img className={s.img} src={lips} />
          <p className={s.text}>Lips</p>
        </li>
        <li>
          <img className={s.img} src={eyeliner} />
          <p className={s.text}>Eyeliner</p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
