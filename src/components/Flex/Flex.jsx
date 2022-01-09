import React from 'react'
import styles from './Flex.module.scss'

export default function Flex(props) {
    const sizes = {
        "1/2": styles.flex_6_12,
        "1/3": styles.flex_4_12,
        "2/3": styles.flex_8_12,
        "1/4": styles.flex_3_12,
        "2/4": styles.flex_6_12,
        "3/4": styles.flex_9_12,
        "1/6": styles.flex_2_12,
        "1/12": styles.flex_1_12,
        "2/12": styles.flex_2_12,
        "3/12": styles.flex_3_12,
        "4/12": styles.flex_4_12,
        "5/12": styles.flex_5_12,
        "6/12": styles.flex_6_12,
        "7/12": styles.flex_7_12,
        "8/12": styles.flex_8_12,
        "9/12": styles.flex_9_12,
        "10/12": styles.flex_10_12,
        "11/12": styles.flex_11_12,
    }

    return (
        <div className={`${styles.flex} ${sizes[props.size || 0]}`} style={{ flexGrow: props.grow || 3 }}>
            <div {...props}>
                {props.children}
            </div>
        </div>
    )
}
