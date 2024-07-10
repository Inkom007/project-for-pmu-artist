import s from "./ContactForm.module.css";

const ContactForm = ({ name, email, message }) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Get in touch</h2>
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
        <labe className={s.label} l>
          Message
          <textarea
            className={s.textarea}
            id="message"
            value={message}
          ></textarea>
        </labe>
        <button className={s.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
