import React from 'react'

function Feedback() {
  return (
    <section className="feedback">
      <div className="feedback__inner">
        <h3 className="feedback__title">Ответим на любые ваши вопросы</h3>
        <form action="/" metod="post" className="feedback__form" encType="multipart/form-data" autoComplete="off" name="feedback-form">
          <fieldset>
            <legend>Заполните форму и мы вам перезвоним</legend>
            <div className="feedback__form__inputs">
              <label className="feedback__form__label-name">
                <input type="text" className="feedback__input__name" name="user-name" id="user-name" placeholder="Имя" />
              </label>
              <label className="feedback__form__label-phone">
                <input type="tel" className="feedback__input__phone" name="user-phone" id="user-phone" placeholder="Телефон" />
              </label>
            </div>
          </fieldset>
          <button type="submit" className="button feedback__form__submit">
            Перезвоните мне
                        </button>
        </form>
        <div className="feedback__agree">
          Отправляя данную форму, я даю
                        <a href="/">согласие на обработку персональных данных</a>
        </div>
      </div>
    </section>
  )
}
export default Feedback