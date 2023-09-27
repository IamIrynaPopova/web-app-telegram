import css from "./Popup.module.css";
import PopupIcon from "../Icons/PopupIcon";

const Popup = () => {
  return (
    <div className={`${css.popup} ${css.hidden}`}>
      <div className={css.popup__icon}>
        <PopupIcon />
      </div>
      <div className={css.popup__conteiner}>
        <div className={css.popup__title__wrapper}>
          <p className={css.popup__title}>Вітаю!</p>
        </div>
        <div className={css.popup__text__wrapper}>
          <p className={css.popup__text}>
            Ваше повідомлення успішно відправлено.<br></br>Ми дамо відповідь
            якнайшвидше
          </p>
        </div>
        <button className={css.popup__button}>ОК</button>
      </div>
    </div>
  );
};

export default Popup;
