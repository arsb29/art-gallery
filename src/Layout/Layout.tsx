import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from '../Header';


export default function Layout() {
    return (
        <div>
            <div>Layout</div>
            <Header />
            <hr />
            <Outlet />
        </div>
    );
}