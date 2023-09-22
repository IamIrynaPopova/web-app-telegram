import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <div className="container">
        <form className="form">
          <p className="form__title">Залиште свої дані, ми вам передзвонимо</p>
          <ul>
            <li className="form__item">
              <label htmlFor="name">Ім'я</label>
              <div className="form__wrap">
                <input
                  className="form__input"
                  type="text"
                  name="name"
                  id="name"
                />
                <svg className="form__icon">
                  <use href="#icon-person-form"></use>
                </svg>
              </div>
            </li>
            <li className="form__item">
              <label htmlFor="tel">Телефон</label>
              <div className="form__wrap">
                <svg className="form__icon">
                  <use href="icons#icon-phone-form"></use>
                </svg>
                <input className="form__input" type="tel" id="tel" name="tel" />
              </div>
            </li>
            <li className="form__item">
              <label htmlFor="email">Пошта</label>
              <div className="form__wrap">
                <svg className="form__icon">
                  <use href="./icons.svg#icon-email-form"></use>
                </svg>
                <input
                  className="form__input"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
            </li>
            <li className="form__item">
              <label htmlFor="feedback">Коментар</label>
              <textarea
                className="form__textarea"
                name="feedback"
                id="feedback"
                placeholder="Введіть текст"
              ></textarea>
            </li>
          </ul>
          <button type="submit" className="button">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
