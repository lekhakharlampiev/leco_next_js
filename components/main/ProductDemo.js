import React from 'react';

function ProductDemo() {
  return (
    <section className="product-demo">
      <div className="product-demo__inner">
        <button type="button" className="button product-demo__previos-slider">
          <span className="arrow__right arrow__left" />
        </button>
        <div className="product-demo__slider-container">
          <ul className="product-demo__slides-list">
            <li className="product-demo__slider product-demo__slider--show">
              <div className="product-demo__slider-content">
                <h4 className="product-demo__slider-title">
                  Модульная система
                              <span className="highlight-sumbols">LECO-Standart</span>
                </h4>
                <p className="product-demo__slider-text">
                  Модульная система LECO-Standart
                  разработана для нужд добывающих
                              предприятий<br /> (Карьеры, ГОК и перерабатывающие комбинаты).
                              Несущие элементы выполнены из<br /> холоднодеформированных швеллеров толщинами 4-5-6 мм.
                </p>
                <div className="product-demo__slider-checkbox"></div>
                <div className="product-demo__slider-img">
                  <img src="/static/img/product-demo-slider1.png" alt="Модульная система" width="800" />
                  <button className="button product-demo__slider-button slider-button-1"></button>
                  <button className="button product-demo__slider-button slider-button-2"></button>
                  <button className="button product-demo__slider-button slider-button-3"></button>
                  <button className="button product-demo__slider-button slider-button-4"></button>
                  <button className="button product-demo__slider-button slider-button-5"></button>
                  <button className="button product-demo__slider-button slider-button-6"></button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button type="button" className="button product-demo__next-slider">
          <span className="arrow__right" />
        </button>
      </div>
    </section>
  );
}
export default ProductDemo; 
