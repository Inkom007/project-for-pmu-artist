import s from "./ContactForm.module.css";
import getIn from "/src/assets/IMG_4089.jpg";

const ContactForm = ({ name, email, message }) => {
  return (
    <div id="ContactForm" className={s.container}>
      <h2 className={s.title}>Get in touch</h2>
      <div className={s.wrapper}>
        <img className={s.image} src={getIn} />

        <form className={s.form}>
          <label className={s.label}>
            Name
            <input className={s.inputName} type="text" id="name" value={name} />
          </label>
          <label className={s.label}>
            Email
            <input
              className={s.inputEmail}
              type="email"
              id="email"
              value={email}
            />
          </label>
          <label className={s.label}>
            Message
            <textarea
              className={s.textarea}
              id="message"
              value={message}
            ></textarea>
          </label>
          <button className={s.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
