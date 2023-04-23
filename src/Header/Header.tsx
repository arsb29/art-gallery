import React from 'react';
import {NavLink} from 'react-router-dom';
import cc from 'classnames';
import {Title, Burger, Text} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from './Header.module.scss';
import {useBreakpoint} from '../helpers';


export default function Header() {
    const {breakpoint} = useBreakpoint();
    const isMobile = breakpoint === 'mobile';
    const [opened, {toggle, close}] = useDisclosure(false);
    const Header = () => <Title weight={400} order={2}>КАТЯ С.</Title>;
    return (
        <header>
            <div className={styles.row}>
                {isMobile && (
                    <>
                        <Header />
                        <Burger
                            className={styles.icon}
                            opened={opened}
                            onClick={toggle}
                        />
                    </>
                )}
            </div>
            <div className={cc(styles.wrap, opened && styles.open)}>
                {!isMobile && <Header />}
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                onClick={close}
                                className={({isActive}) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                <Text fz="md">Магазин</Text>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={close}
                                className={({isActive}) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                <Text fz="md">О себе</Text>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/studio"
                                onClick={close}
                                className={({isActive}) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                <Text fz="md">Мастерская</Text>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/events"
                                onClick={close}
                                className={({isActive}) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                <Text fz="md">Мероприятия</Text>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacts"
                                onClick={close}
                                className={({isActive}) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                <Text fz="md">Контакты</Text>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
