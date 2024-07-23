import s from "./ContactForm.module.css";

const ContactForm = ({ name, email, message }) => {
  return (
    <div>
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
  );
};

export default ContactForm;
