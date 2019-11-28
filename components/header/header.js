import React from 'react'
import Link from 'next/link'


export default () => (
    <header className="main-header">
        <div className="container">
            <div className="main-header__inner">
                <div className="main-header__logo">
                    <img src="/static/img/leco-logo.png" alt="" />
                </div>
                <div className="main-header__language-select">
                    <button type="button" className="button language-select__button">En</button>
                    <button type="button" className="button language-select__button language-select__button--selected">Ru</button>
                </div>
                <nav className="main-header__menu">
                    <ul className="main-menu-list">
                        <li className="main-menu-item">
                            <Link href='/'>
                                <a>Конвейеры LECO</a>
                            </Link>
                        </li>
                        <li className="main-menu-item">
                            <Link href='/'>
                                <a>Преимущества</a>
                            </Link>
                        </li>
                        <li className="main-menu-item">
                            <Link href='/'>
                                <a>Расчет стоимости</a>
                            </Link>
                        </li>
                        <li className="main-menu-item">
                            <Link href='/'>
                                <a>О компании</a>
                            </Link>
                        </li>
                        <li className="main-menu-item">
                            <Link href='/'>
                                <a>Отзывы</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="main-header__contacts">
                    <a href="tel: +7 (4912) 57-58-90" className="main-header__contacts__tel">+7 (4912) 57-58-90</a>
                    <button type="button" className="button main-header__contacts__feedback">Заказать обратный звонок</button>
                </div>
            </div>
        </div>
    </header>
)