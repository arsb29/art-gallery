import React, {useCallback, useEffect, useState} from 'react';
import {
    TextInput,
    Button,
    Group,
    Select,
    InputBase,
    Autocomplete
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IMaskInput } from 'react-imask';
import styles from './Form.module.scss';


const EMAIL_SERVICES = ['mail.ru', 'yandex.ru', 'google.com'];

export default function Form() {
    const [emailHints, setEmailHints] = useState([]);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            phone: '',
            select: '',
        },
        validateInputOnBlur: true,
        validate: {
            email: (value) => (
                /^\S+@\S+$/.test(value) ? null : 'Некорректный email'
            ),
            name: (value) => (value ? null : 'Введите имя'),
            phone: (value) => (/\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/.test(value)
                ? null
                : 'Некорректный телефон'
            ),
            select: (value) => (value ? null : 'Введите что Вас интересует'),
        },
    });
    const {email: emailValue} = form.values;
    useEffect(() => {
        const pos = emailValue.indexOf('@');
        if (pos > 0) {
            const base = emailValue.slice(0, pos);
            setEmailHints(EMAIL_SERVICES.map(service => `${base}@${service}`));
        } else {
            setEmailHints([]);
        }
    }, [emailValue]);
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const formDataKey in form.values) {
            formData.set(formDataKey, form.values[formDataKey]);
        }
        return fetch('./php/mail.php', {
            method: 'POST',
            body: formData
        })
    }, [form.values]);

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <TextInput
                    withAsterisk
                    label="Имя"
                    placeholder="Введите имя"
                    {...form.getInputProps('name')}
                />
                <InputBase
                    withAsterisk
                    label="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    component={IMaskInput}
                    mask="+7 (000) 000-00-00"
                    mt="xl"
                    {...form.getInputProps('phone')}
                />
                <Autocomplete
                    withAsterisk
                    label="E-mail"
                    placeholder="Введите почту"
                    mt="xl"
                    data={emailHints}
                    {...form.getInputProps('email')}
                />
                <Select
                    label="Что Вас интересует?"
                    dropdownPosition="bottom"
                    mt="xl"
                    data={[
                        { value: 'picture', label: 'Картина' },
                        { value: 'event', label: 'Выставка' },
                        { value: 'studio', label: 'Мастерская' },
                        { value: 'other', label: 'Другое' },
                    ]}
                    {...form.getInputProps('select')}
                />
                <Group position="right" mt="xl">
                    <Button
                        variant="outline"
                        type="submit"
                    >
                        Отправить
                    </Button>
                </Group>
            </form>
        </div>
    );
}