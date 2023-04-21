import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useBreakpoint from 'use-breakpoint';
import cc from 'classnames';
import styles from './Header.module.scss';
import {BREAKPOINTS} from '../helpers';


export default function Header() {
    const {breakpoint} = useBreakpoint(BREAKPOINTS);
    const isMobile = breakpoint === 'mobile';
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const handleToggle = () => {setMobileMenuOpen(!isMobileMenuOpen)};
    return (
        <header>
            <div className={styles.row}>
                <h1>Катя С.</h1>
                {isMobile && (
                    <div
                        className={cc(styles.icon, isMobileMenuOpen && styles.open)}
                        onClick={handleToggle}
                    />
                )}
            </div>
            <div className={cc(styles.wrap, isMobileMenuOpen && styles.open)}>
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