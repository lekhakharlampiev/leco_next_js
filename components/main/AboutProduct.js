import React from 'react';

function AboutProduct() {
  return (
    <section className="about-product">
      <div className="about-product__inner">
        <div className="about-product__description">
          <h2 className="about-product__title">
              Что такое легкосборные<br />конвейеры ЛЕКО?
          </h2>
            <p className="about-product__text">
              Наши конвейерные системы получили название «ЛЕКО»,
              так как процесс проектирования и сборки происходит по
              упрощенной методике, что облегчает всю технологию и операции, и
              уменьшает трудозатраты и время. А это главные составляющие при
              остановке производства на время монтажа нового конвейера.
              Такая модель конвейера очень удобна, проста и неприхотлива.
              На базе данного типа конвейера можно спроектировать систему
              практически любой сложности и конфигурации.
              Мы уверены, что наша разработка найдёт самое широкое применение в
              промышленности и оптимизирует работу любого производства.
            </p>
        </div>
        <div className="about-product__media">
          <video className="about-product__video" src="" poster="/static/img/video-plug.png" width="620" />
          <button type="button" className="button about-product__media__play" />
        </div>
      </div>
    </section>
    );
  }
export default AboutProduct;