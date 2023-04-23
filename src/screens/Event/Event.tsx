import React from 'react';
import {events} from './eventList';
import {Item} from '../../@components/Item';


export default function Event() {
    return (
        <div>
            {events.map((options, number) => (
                <Item key={number} {...options} />
            ))}
        </div>
    );
}
