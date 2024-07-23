import ContactForm from "../ContactForm/ContactForm";
import s from "./GetInTouch.module.css";
import pmu from "/src/assets/pmu.jpg";

const GetInTouch = () => {
  return (
    <div id="GetInTouch" className={s.container}>
      <h2 className={s.title}>Get in touch</h2>
      <div className={s.wrapper}>
        <img className={s.img} src={pmu} alt="pmu-tool" />
        <ContactForm />
      </div>
    </div>
  );
};

export default GetInTouch;
