import React from 'react';

class ProductDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberButton: null,
      activated: 'inactive',
    }
  }
  buttonHandleClick = (number, e) => {
    if (number === this.state.numberButton && this.state.activated === 'active') {
      this.setState({
        activated: 'inactive',
        numberButton: number
      })
    } else {
      this.setState({
        activated: 'active',
        numberButton: number
      })
    }
  }
  renderButton = () => {
    const buttons = [1, 2, 3, 4, 5, 6];
    const buttonFeature = [
      "Возможность замены вала барабана",
      "Покрытие приводного барабана Футеровочной резиной 8мм с ромбовидным профилем",
      "Порошковая покраска става конвейера в базовой комплектации. Возможно горячее оцинкование",
      "Сниженная металлоемкость изделия – до 60%",
      "Защитный экран из оцинкованного перфорированного листа в базовой комплектации",
      "Высокая геометрическая точность (отклонение +- 2мм на диагонали секции 3м"
    ];
    const number = this.state.numberButton !== null ? this.state.numberButton - 1 : null;
    const active = this.state.activated === 'active' ? true : false;
    return (
      <div className="product-demo__slider-feature-buttons">
        {buttons.map((button, i) => {
          let show = false;
          if (i === number && active) {
            show = true;
          }
          return (
            <div className={`product-demo__slider-button-container slider-button-${button}`} key={i}>
              <button className={(show ? "button product-demo__slider-button feature-show" : "button product-demo__slider-button")} onClick={(e) => this.buttonHandleClick(button, e)} >
                <svg width="60" height="62" viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="30.0003" cy="31.3374" rx="18.3284" ry="18.6357" fill="#87B940" />
                  <path d="M53.6898 31.3378C53.6898 44.6553 43.0741 55.437 29.9963 55.437C16.9185 55.437 6.30273 44.6553 6.30273 31.3378C6.30273 18.0204 16.9185 7.23865 29.9963 7.23865C43.0741 7.23865 53.6898 18.0204 53.6898 31.3378Z" stroke="#87B940" />
                  <path opacity="0.4" d="M59.5 31.3377C59.5 47.9158 46.2846 61.3407 30 61.3407C13.7154 61.3407 0.5 47.9158 0.5 31.3377C0.5 14.7596 13.7154 1.33472 30 1.33472C46.2846 1.33472 59.5 14.7596 59.5 31.3377Z" stroke="#87B940" />
                  {!show && <rect x="29.2598" y="23.1379" width="1.46628" height="16.3995" fill="white" /> }
                  <rect x="21.9316" y="32.0831" width="1.49086" height="16.129" transform="rotate(-90 21.9316 32.0831)" fill="white" />
                </svg>
              </button>
              <div className="product-demo__slider-button-container-content">
                <p>{buttonFeature[i]}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  render() {
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
                    {this.renderButton()}
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
    )
  }
}
export default ProductDemo; 
