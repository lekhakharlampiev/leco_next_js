import React from 'react'
import Link from 'next/link'


export default () => (
    <header class="main-header">
        <div class="container">
            <div class="main-header__inner">
                <div class="main-header__logo">
                    <img src="img/leco-logo.png" alt="" />
                </div>
                <div class="main-header__language-select">
                    <button type="button" class="button language-select__button">En</button>
                    <button type="button" class="button language-select__button language-select__button--selected">Ru</button>
                </div>
                <nav class="main-header__menu">
                    <ul class="main-menu-list">
                        <li class="main-menu-item">
                            <Link href='/'>
                                <a>Конвейеры LECO</a>
                            </Link>
                        </li>
                        <li class="main-menu-item">
                            <Link href='/'>
                                <a>Преимущества</a>
                            </Link>
                        </li>
                        <li class="main-menu-item">
                            <Link href='/'>
                                <a>Расчет стоимости</a>
                            </Link>
                        </li>
                        <li class="main-menu-item">
                            <Link href='/'>
                                <a>О компании</a>
                            </Link>
                        </li>
                        <li class="main-menu-item">
                            <Link href='/'>
                                <a>Отзывы</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div class="main-header__contacts">
                    <a href="tel: +7 (4912) 57-58-90" class="main-header__contacts__tel">+7 (4912) 57-58-90</a>
                    <button type="button" class="button main-header__contacts__feedback">Заказать обратный звонок</button>
                </div>
            </div>
        </div>
    </header>
)