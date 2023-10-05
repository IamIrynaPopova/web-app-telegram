import { useForm } from "react-hook-form";
import css from "./Form.module.css";
import PersonIcon from "../Icons/PersonIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import EmailIcon from "../Icons/EmailIcon";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleTelChange = (e) => {
    const value = e.target.value;
    const arrayValue = value.split("");

    for (let i = 0; i < arrayValue.length; i++) {
      if (arrayValue[7] === ")") {
        arrayValue.splice(7, 1);
        return arrayValue;
      } else if (i === 7) {
        arrayValue.splice(7, 0, ")");
        const newValue = arrayValue.join("");
        e.target.value = newValue;
        return;
      }
    }
  };

  const handleOnSubmit = (data, e) => {
    e.preventDefault();
    reset();
    onSubmit();
    console.log(data);
  };
  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <p className={css.form__title}>
          Залиште свої дані, ми вам передзвонимо
        </p>
        <ul>
          <li className={css.form__item}>
            <label htmlFor="name">Ім'я</label>
            <div className={css.form__wrap}>
              <input
                {...register("name", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "Має складатись з мінімум 4x літер",
                  },
                })}
                className={css.form__input}
                type="text"
                name="name"
                id="name"
              />
              <p className={css.form__message}>{errors.name?.message}</p>
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
                {...register("tel", {
                  required: true,
                  pattern: {
                    value: /^\+\d{2}\(\d{3}\)\d{7}$/,
                    message: "Ви ввели не вірний номер ",
                  },
                })}
                className={css.form__input}
                type="tel"
                id="tel"
                name="tel"
                defaultValue="+38("
                onChange={handleTelChange}
              />
            </div>
            <p className={css.form__message}>{errors.tel?.message}</p>
          </li>
          <li className={css.form__item}>
            <label htmlFor="email">Пошта</label>
            <div className={css.form__wrap}>
              <div className={css.form__icon}>
                <EmailIcon />
              </div>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Введіть пошту в форматі example@gmail.com ",
                  },
                })}
                className={css.form__input}
                type="email"
                id="email"
                name="email"
              />
            </div>
            <p className={css.form__message}>{errors.email?.message}</p>
          </li>
          <li className={css.form__item}>
            <label htmlFor="feedback">Коментар</label>
            <textarea
              {...register("feedback")}
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
