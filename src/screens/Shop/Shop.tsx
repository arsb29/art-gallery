import React from 'react';
import {Item} from '../../@components/Item';
import {pictures} from './pictures';


export default function Shop() {
    return (
        <div>
            {pictures.map((options, number) => (
                <Item key={number} {...options} />
            ))}
        </div>
    );
}