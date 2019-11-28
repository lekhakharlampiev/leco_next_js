import React from 'react';

function Avantages() {
  return (
    <section className="avantages">
      <div className="avantages__points points-1" />
      <div className="avantages__points points-2" />
      <div className="avantages__inner">
        <div className="avantages__content">
          <h3 className="avantages__title">Преимущества</h3>
          <span className="title__underline" />
          <ul className="avantages__list">
            <li className="avantages__item">
              <span className="avantages__item__icon avantages__item--icon-1" />
              <span className="avantages__item__title">Низкая металлоемкость продукта</span>
              <span className="avantages__item__text">
                Cнижение металлоемкости изделия, в отличие<br />от стандартных изделий на 60%
                                </span>
            </li>
            <li className="avantages__item">
              <span className="avantages__item__icon avantages__item--icon-2" />
              <span className="avantages__item__title">Модульность и масштабируемость</span>
              <span className="avantages__item__text">
                Модульным и масштабируемы  производство это  живой организм, – <br />
                который постоянно меняется и обновляется, приспосабливаясь<br />
                к  текущим задачам. И чем меньшие издержки понесет  производство<br />
                в ходе адаптации к  новой задаче, тем более конкурентным  будет продукт.</span>
            </li>
            <li className="avantages__item">
              <span className="avantages__item__icon avantages__item--icon-3" />
              <span className="avantages__item__title">Ремонтопригодность</span>
              <span className="avantages__item__text">
                Любое оборудование  требует  регулярного технического<br />
                обслуживания, и удобно, когда изготовители оборудования заранее<br />
                облегчат его сервис.
                                    </span>
            </li>
            <li className="avantages__item">
              <span className="avantages__item__icon avantages__item--icon-4"></span>
              <span className="avantages__item__title">работают в сложных условиях</span>
              <span className="avantages__item__text">
                Базовое исполнение изделия в порошковой покраске идеально<br />
                для уличного исполнения
                                    </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Avantages;