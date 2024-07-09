import s from "./ContactForm.module.css";

const ContactForm = ({ name, email, message }) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Get in touch</h2>
      <form className={s.form}>
        <input
          className={s.inputName}
          type="text"
          id="name"
          value={name}
          placeholder="Name"
        />
        <input
          className={s.inputEmail}
          type="email"
          id="email"
          value={email}
          placeholder="Email"
        />
        <textarea
          className={s.textarea}
          id="message"
          value={message}
          placeholder="Message"
        ></textarea>
        <button className={s.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
