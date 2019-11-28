import React from 'react';

function Offer() {
  return (
    <article className="offer">
      <div className="offer__inner">
        <div className="offer__logo" />
        <div className="offer__text">
          Воспользуйтесь удобной<br />
          формой расчета стоимости<br />
          конвейера, выбрав нужные<br />
          вам параметры
                    </div>
        <div className="offer__button">
          <button type="button" className="button offer__button-calculation">начать расчет</button>
        </div>
      </div>
    </article>
  )
}
export default Offer;