import React from 'react'
import styles from './listItem.module.scss'
import { symbolName } from 'typescript'
import { useSpring, animated } from '@react-spring/web'

interface ItoDo {
    id: number,
    message: string,
    isDone: boolean,
}

const ListItem = ({ item, changeDone, deleteTask }: any) => {

    const springs = useSpring({
        from: { y: -25 , opacity: 0},
        to: { y: 0, opacity: 1 },
    })

    return (
        <animated.div style={springs}>
            <div className={styles.listItem}>
                <div className={styles.left}>
                    <div className={item.isDone ? styles.isDoneIndicator_done : styles.isDoneIndicator} onClick={() => { changeDone(item.id) }}></div>
                    <p className={item.isDone ? styles.itemMessage_done : styles.itemMessage} onClick={() => { changeDone(item.id) }}>{item.message}</p>
                </div>
                <div className={styles.deleteItemButton} onClick={() => { deleteTask(item.id) }}>x</div>
            </div>
        </animated.div>
    )
}

export default ListItem