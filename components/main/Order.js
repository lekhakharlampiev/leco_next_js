import React from 'react'

function Order() {
  return (
    <section className="order">
      <div className="order__inner">
        <h3 className="order__title">Процесс заказа и монтажа</h3>
        <span className="title__underline" />
        <div className="order__content">
          <ul className="order__list">
            <li className="order__list__item">
              <div className="order__list__item-number number-1">
                ......................................
                      </div>
              <p className="order__list__item-text">
                Расчитайте стоимость, выбрав<br />
                параметры необходимые для <br />
                вашего производства, <br />
                воспользовавшись нашим
                      </p>
              <button className="button order__list__item__link">калькулятором</button>
            </li>
            <li className="order__list__item">
              <div className="order__list__item-number number-2">
                ......................................
                          </div>
              <p className="order__list__item-text">
                Мы перезваниваем и <br />
                консультируем по всем <br />
                вопросам, уточняем детали <br />
                вашего заказа и преступаем <br />
                к производству конвейера
                      </p>
            </li>
            <li className="order__list__item">
              <div className="order__list__item-number number-3" />
              <p className="order__list__item-text">
                Доставляем вам готовый <br />
                конвейер, монтируем и <br />
                помогаем запустить в <br />
                эксплуатацию
                      </p>
            </li>
          </ul>
          <button type="button" className="button order__button">начать расчет</button>
        </div>
      </div>
    </section>
  )
}
export default Order