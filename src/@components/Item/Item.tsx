import React from 'react';
import {Button, Text, Title} from '@mantine/core';
import {useBreakpoint} from '../../helpers';
import styles from './Item.module.scss';


type Props = {
    title: string,
    description: string,
    button: string,
    image: string
}

export function Item(props: Props) {
    const {breakpoint} = useBreakpoint();
    const isMobile = breakpoint === 'mobile';
    const {title, image, description, button} = props;
    return (
        <div className={styles.row}>
            <div className={styles.left}>
                <img src={image} alt="" />
            </div>
            <div className={styles.right}>
                <div>
                    <Title order={3}>{title}</Title>
                    <Text className={styles.description}>
                        {description}
                    </Text>
                </div>
                <Button
                    variant="outline"
                    className={styles.button}
                    fullWidth={isMobile}
                    component="a"
                    href="./form"
                >
                    {button}
                </Button>
            </div>
        </div>
    )
}
