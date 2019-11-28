import React from 'react'

function Comments() {
  return (
    <section className="comments">
      <div className="comments__inner">
        <h3 className="comment__title">Отзывы наших клиентов</h3>
        <span className="title__underline" />
        <div className="comments__slider">
          <button type="button" className="button comments__slider-previos">
            <span className="arrow__right arrow__left" />
          </button>
          <div className="comments__slider-container">
            <ul className="comments__slider-list">
              <li className="comments__slider-item comments__slider-item--show">
                <img src="/static/img/comment-1.png" alt="Отзыв" className="comments__slider__img" width="830px" />
                <div className="comments__slider-checkbox"></div>
              </li>
            </ul>
          </div>
          <button type="button" className="button comments__slider-next">
            <span className="arrow__right" />
          </button>
        </div>
        <div className="comments__partners">
          <ul className="comments__partners__list">
            <li className="comments__partners-item">
              <img src="/static/img/tehnonikol.png" alt="Технониколь" />
            </li>
            <li className="comments__partners-item">
              <img src="/static/img/olmag.png" alt="ОлМаг" />
            </li>
            <li className="comments__partners-item">
              <img src="/static/img/guardian.png" alt="ГардиантСтекло" />
            </li>
            <li className="comments__partners-item">
              <img src="/static/img/krz.png" alt="КРЗ" />
            </li>
            <li className="comments__partners-item">
              <img src="/static/img/eurocement.png" alt="ЕвроЦемент" />
            </li>
            <li className="comments__partners-item">
              <img src="/static/img/hartiya.png" alt="Хартия" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Comments