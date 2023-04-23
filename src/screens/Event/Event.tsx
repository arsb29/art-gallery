import React from 'react';
import {Title, Text, Button} from '@mantine/core';
import {events} from './eventList';
import styles from './Event.module.scss'
import {useBreakpoint} from '../../helpers';


export default function Event() {
    return (
        <div>
            {events.map(renderEvent)}
        </div>
    );
}

type Event = {
    title: string,
    description: string[],
    button: string,
    image: string
}

function renderEvent(event: Event) {
    const {breakpoint} = useBreakpoint();
    const isMobile = breakpoint === 'mobile';
    const {title, image, description, button} = event;
    return (
        <div className={styles.row}>
            <div className={styles.left}>
                <img src={image} alt="" />
            </div>
            <div className={styles.right}>
                <div>
                    <Title order={3}>{title}</Title>
                    {description.map((text, index) => (
                        <Text className={styles.description} key={index}>
                            {text}
                        </Text>
                    ))}
                </div>
                <Button
                    variant="outline"
                    className={styles.button}
                    fullWidth={isMobile}
                >
                    {button}
                </Button>
            </div>
        </div>
    )
}
