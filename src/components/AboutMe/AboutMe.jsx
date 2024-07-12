import s from "./AboutMe.module.css";
import AboutMeImg from "/src/assets/about_me.jpg";

const AboutMe = () => {
  return (
    <section id="AboutMe" className={s.container}>
      <h2 className={s.title}>About me</h2>
      <div className={s.aboutMe}>
        <img className={s.image} src={AboutMeImg} alt="my-photo" />
        <div className={s.textContainer}>
          <p className={s.text}>
            Hello! I'm Yuliia, a professional PMU artist with over 4 years of
            experience in the beauty industry. I specialize in creating natural,
            long-lasting beauty enhancements through permanent makeup.
          </p>
          <p className={s.text}>
            My services include eyebrow , eyeliner and lips blush. I take pride
            in offering personalized consultations to understand each client's
            unique needs and preferences.
          </p>
          <p className={s.text}>
            Safety and quality are my top priorities, and I use only the highest
            quality, sterile equipment and pigments.
          </p>
          <p className={s.text}>
            I look forward to welcoming you to my studio and helping you enhance
            your natural beauty. Book your consultation today and start your
            journey to a more confident you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
