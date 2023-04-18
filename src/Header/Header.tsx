import React from 'react';
import {Link} from 'react-router-dom';


export default function Header() {
    return (
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
    );
}