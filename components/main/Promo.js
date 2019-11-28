import React from 'react';
export default () => (
        <section className="promo">
        <div className="promo__inner">
            <h1 className="visuali-hidden">Легкосборные Конвейеры</h1>
            <div className="promo__title">
                <span className="highlight-sumbols">ЛЕ</span>гкосборные 
                <span className="highlight-sumbols">КО</span>нвейеры
             </div>
             <span className="promo__subtitle">Онлайн расчет конвейера до 300метров!</span>
             <button className="button promo__button-calculation">
                 <span className="promo__button-calculation__text">
                     расчитать стоимость
                 </span>    
             </button>
             <div className="promo__img">
                 <img src="/static/img/img-promo.png" alt="Конвейер" width="100%" />
             </div>     
        </div> 
     </section>
)