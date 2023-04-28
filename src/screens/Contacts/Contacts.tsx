import React from 'react';
import {Item} from '../../@components/Item';
import contactsImage from './assets/contacts.png';


export const contacts = {
    "title": "Екатерина Симонова",
    // eslint-disable-next-line max-len
    "description": <p><a href="tel:+7 (911) 981-11-15">+7 (911) 981-11-15</a><br /><a href="mailto:simonovakate@gmail.com">simonovakate@gmail.com</a><br />Россия, Cанкт-Петербург<br /><br />Заинтересованы в покупке картины?<br />Хотите реализовать вашу идею на холсте?<br />Желаете посетить выставку?<br />Думаете просто написать мне?<br /><br />Я буду рада получить от вас письмо!</p>,
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
