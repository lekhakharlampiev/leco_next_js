import React from 'react'

function Service() {
  return (
    <section className="service">
      <div className="service__inner">
        <h3 className="service__title">Комплексное сопровождение</h3>
        <span className="title__underline" />
        <div className="service__content">
          <p className="service__content__text">
            Осуществляем сопровождение полного цикла – от сборки и монтажа <br />
            до гарантийного обслуживания и ремонта
                        </p>
          <ul className="service__list">
            <li className="service__list__item">
              <div className="service__list__item-icon-1" />
              <div className="service__list__item__text">
                Доставка <br />
                во все регионы РФ
                                </div>
            </li>
            <li className="service__list__item">
              <div className="service__list__item-icon-2" />
              <div className="service__list__item__text">
                Установка и сборка <br />
                оборудования
                                </div>
            </li>
            <li className="service__list__item">
              <div className="service__list__item-icon-3" />
              <div className="service__list__item__text">
                Обслуживание <br />
                и поддержка
                                </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Service