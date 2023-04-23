import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from '../Header';
import styles from './Layout.module.scss';


export default function Layout() {
    return (
        <div className={styles.container}>
            <Header />
            <Outlet />
        </div>
    );
}
