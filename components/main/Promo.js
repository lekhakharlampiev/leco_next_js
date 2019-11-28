import React from 'react';
export default () => (
        <section class="promo">
        <div class="promo__inner">
            <h1 class="visuali-hidden">Легкосборные Конвейеры</h1>
            <div class="promo__title">
                <span class="highlight-sumbols">ЛЕ</span>гкосборные 
                <span class="highlight-sumbols">КО</span>нвейеры
             </div>
             <span class="promo__subtitle">Онлайн расчет конвейера до 300метров!</span>
             <button class="button promo__button-calculation">
                 <span class="promo__button-calculation__text">
                     расчитать стоимость
                 </span>    
             </button>
             <div class="promo__img">
                 <img src="/static/img/img-promo.png" alt="Конвейер" width="100%" />
             </div>     
        </div> 
     </section>
)