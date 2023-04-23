import React from 'react';
import {Item} from '../../@components/Item';
import contactsImage from './assets/contacts.png';


export const contacts = {
    "title": "Екатерина Симонова",
    // eslint-disable-next-line max-len
    "description": "+7 (911) 981-11-15\nsimonovakate@gmail.com\nРоссия, Cанкт-Петербург\n\nЗаинтересованы в покупке картины?\nХотите реализовать вашу идею на холсте?\nЖелаете посетить выставку?\nДумаете просто написать мне?\n\nЯ буду рада получить от вас письмо!",
    "button": "Написать",
    "image": contactsImage
};

export default function Contacts() {
    return (
        <div>
            <Item {...contacts} />
        </div>
    );
}
