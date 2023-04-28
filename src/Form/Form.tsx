import React from 'react';
import { TextInput, Button, Group, Select, InputBase  } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IMaskInput } from 'react-imask';
import styles from './Form.module.scss';


export default function Form() {
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            phone: '',
            select: '',
        },

        validate: {
            email: (value) => (
                /^\S+@\S+$/.test(value) ? null : 'Некорректный email'
            ),
            name: (value) => (value ? null : 'Введите имя'),
            phone: (value) => (value ? null : 'Введите телефон'),
            select: (value) => (value ? null : 'Введите что Вас интересует'),
        },
    });

    return (
        <div className={styles.form}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                    type="number"
                    {...form.getInputProps('phone')}
                />
                <TextInput
                    withAsterisk
                    label="E-mail"
                    placeholder="Введите почту"
                    mt="xl"
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
                        disabled
                    >
                        Отправить
                    </Button>
                </Group>
            </form>
        </div>
    );
}