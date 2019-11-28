import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__content">
          <h3 className="about__title">О нас</h3>
          <span className="title__underline" />
          <div className="about__info">
            <div className="about__info__block">
              <div className="about__info__block-text">
                <p className="mission">
                  Цель нашей компании - Задать новые<br />
                  стандарты промышленного сервиса.<br />
                  Стандарты опирающиеся на три главных<br />
                  понятия:
                                    </p>
                <ul className="about__info__block-list">
                  <li className="about__info__block-item">Качество</li>
                  <li className="about__info__block-item">Ответственность</li>
                  <li className="about__info__block-item">Компетентность</li>
                </ul>
              </div>
              <img src="/static/img/about-block-1.png" alt="о нас" />
            </div>
            <div className="about__info__block">
              <img src="/static/img/about-block-2.png" alt="о нас" />
              <div className="about__info__block-text">
                <p className="info">
                  Мы обслуживаем конвейерное оборудование разных<br />
                  производителей от немецкого до гаражного исполнения и<br />
                  глубоко понимаем конструкцию конвейерного<br />
                  оборудования с точки зрения Сервиса. Наши услуги<br />
                  оценили крупнейшие компании по производству<br />
                  строительных материалов и ГОК.<br />
                  Смело и успешно создаем и запускаем конвейерные линии<br />
                  полного цикла с годовым Сервисным обслуживанием и<br />
                  ведением ТОиР. Имея свою систему ТОиР мы планируем<br />
                  техническое обслуживание, поддерживая работу<br />
                  оборудования не допуская дорогостоящих простоев.
                                    </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about__statistics">
          <div className="about__statistics__subtitile">
            Компания в цифрах:
                        </div>
          <ul className="about__statistics__list">
            <li className="about__statistics__item">
              <div className="statistics__item__number">
                <span className="highlight-sumbols">12</span>
              </div>
              <div className="statistics__item__label">
                Лет успешной работы
                                </div>
            </li>
            <li className="about__statistics__item">
              <div className="statistics__item__number">
                <span className="highlight-sumbols">28</span>
              </div>
              <div className="statistics__item__label">
                Профессиональных<br />
                специалистов
                                </div>
            </li>
            <li className="about__statistics__item">
              <div className="statistics__item__number">
                <span className="highlight-sumbols">1200</span>
              </div>
              <div className="statistics__item__label">
                Выпускаем конвейеров в год
                                </div>
            </li>
            <li className="about__statistics__item">
              <div className="statistics__item__number">
                <span className="highlight-sumbols">59</span>
              </div>
              <div className="statistics__item__label">
                Крупнейших производителей –<br />
                наши клиенты
                                </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )

}
export default About