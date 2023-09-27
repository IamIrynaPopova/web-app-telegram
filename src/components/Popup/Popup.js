import { useState, useEffect } from "react";
import css from "./Popup.module.css";
import PopupIcon from "../Icons/PopupIcon";

const Popup = ({ formSubmit, setFormSubmit }) => {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const classPopup = popupIsVisible ? css.popup : `${css.popup} ${css.hidden}`;
  console.log(classPopup);

  useEffect(() => {
    if (formSubmit) setPopupIsVisible(true);
  }, [formSubmit]);

  const onClickPopup = () => {
    setPopupIsVisible(false);
    setFormSubmit(false);
  };

  return (
    <div className={classPopup}>
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
        <button className={css.popup__button} onClick={onClickPopup}>
          ОК
        </button>
      </div>
    </div>
  );
};

export default Popup;
