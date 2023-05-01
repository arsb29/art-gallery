import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Text, Title} from '@mantine/core';
import {useBreakpoint} from '../../helpers';
import styles from './Item.module.scss';
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";


type Props = {
    title: string,
    description: string | ReactJSXElement,
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
                <Link to="/form">
                    <Button
                        variant="outline"
                        className={styles.button}
                        fullWidth={isMobile}
                    >
                        {button}
                    </Button>
                </Link>
            </div>
        </div>
    )
}
