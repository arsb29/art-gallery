import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';


export default function Header() {
    return (
        <header>
            <div className={styles.wrap}>
                <h1>Катя С.</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Магазин</Link>
                        </li>
                        <li>
                            <Link to="/about">О себе</Link>
                        </li>
                        <li>
                            <Link to="/studio">Мастерская</Link>
                        </li>
                        <li>
                            <Link to="/events">Мероприятия</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Контакты</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}