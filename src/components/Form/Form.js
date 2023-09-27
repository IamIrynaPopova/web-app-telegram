import css from "./Form.module.css";
import PersonIcon from "../Icons/PepsonIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import EmailIcon from "../Icons/EmailIcon";

const Form = ({ handleSubmit }) => {
  const onSubmitForm = (e) => {
    handleSubmit();
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={onSubmitForm}>
        <p className={css.form__title}>
          Залиште свої дані, ми вам передзвонимо
        </p>
        <ul>
          <li className={css.form__item}>
            <label htmlFor="name">Ім'я</label>
            <div className={css.form__wrap}>
              <input
                className={css.form__input}
                type="text"
                name="name"
                id="name"
              />
              <div className={css.form__icon}>
                <PersonIcon />
              </div>
            </div>
          </li>
          <li className={css.form__item}>
            <label htmlFor="tel">Телефон</label>
            <div className={css.form__wrap}>
              <div className={css.form__icon}>
                <PhoneIcon />
              </div>
              <input
                className={css.form__input}
                type="tel"
                id="tel"
                name="tel"
              />
            </div>
          </li>
          <li className={css.form__item}>
            <label htmlFor="email">Пошта</label>
            <div className={css.form__wrap}>
              <div className={css.form__icon}>
                <EmailIcon />
              </div>
              <input
                className={css.form__input}
                type="email"
                id="email"
                name="email"
              />
            </div>
          </li>
          <li className={css.form__item}>
            <label htmlFor="feedback">Коментар</label>
            <textarea
              className={css.form__textarea}
              name="feedback"
              id="feedback"
              placeholder="Введіть текст"
            ></textarea>
          </li>
        </ul>
        <button type="submit" className={css.button}>
          Відправити
        </button>
      </form>
    </div>
  );
};

export default Form;
