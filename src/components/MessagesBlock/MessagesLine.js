

import React from 'react'
import s from './MessagesBlock.module.scss'
import { useStore } from '../../Context'
import { useObserver } from "mobx-react";
import { motion } from 'framer-motion';
import classNames from 'classnames'


const MessageLine = React.memo(({ ms, index }) => {
    const store = useStore()
    const time = ms.ts.toLocaleTimeString().slice(0, -3)
    const roomMessages = store.getRoomMessages()

    const roomChannels = () => {
        if (index >= 1) {
            return roomMessages[index].channelId === roomMessages[index - 1].channelId ? true : false
        } else {
            return false
        }
    }


    return useObserver(() => (
        <>
            { !roomChannels() && <Divider channel={ms.channelId} /> }
            <div className={classNames(
                s.message__line,
                { [s.message__line__right]: ms.sender === 'You' },
            )}>
                <motion.div
                    className={s.message__box}
                    initial={{ opacity: 0, y: '10%' }} animate={{ opacity: 1, y: '0', transition: { duration: 0.5 } }}>
                    <p>{ms.body}</p>
                    <span>{time}</span>
                </motion.div>
            </div>
        </>
    ))
})

export default MessageLine;





const Divider = ({ channel }) => {
    return (
        <div className={s.divider}>
            <span className={s.line}></span>
            <span className={s.channelName}>{channel}</span>
            <span className={s.line}></span>
        </div>
    )
}
