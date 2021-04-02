import React from 'react'
import s from './MessagesBlock.module.scss'
import SimpleSelect from './Select'
import { useStore } from '../../Context'
import { useObserver } from "mobx-react";
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid'
import classNames from 'classnames'


const MessagesBlock = React.memo(function () {
    const store = useStore()

    return useObserver(() => (

        <div className={s.messages__block}>
            {
                store.activeChat === null
                    ? <>Choose a chat</>
                    : <MessagesWindow />
            }
        </div>
    ))
})

export default MessagesBlock


const MessagesWindow = React.memo(function () {

    const store = useStore()
    const scrollTo = React.useRef()

    React.useEffect(() => {
        scrollTo.current.scrollIntoView({ behavior: "smooth" })

    })

    React.useEffect(() => {
        store.filterRecivedMessages()
        return () => store.filterRecivedMessages()

    }, [store.messages.length])

    const [input, handleInputMessage] = React.useState('')
    const roomMsgs = store.messages.filter(i => i.roomId === store.activeChat)

    const submit = (event) => {
        event.preventDefault();
        const newMessage = {
            id: nanoid(),
            roomId: store.activeChat,
            channelId: store.chanelFilter || roomMsgs[roomMsgs.length - 1].channelId,
            sender: 'You',
            body: input,
            ts: new Date(),
        }
        handleInputMessage('')
        store.pushMessage(newMessage)
    }

    return useObserver(() => (

        <div className={s.messages__window}>
            <div className={s.messages__window__head}>
                <span>{store.activeChat}</span>
                <SimpleSelect />
            </div>

            <div className={s.messages__window__body}>
                {
                    store.getRoomMessages().map((i, index) => <MessageLine key={i.id} ms={i} index={index} />)
                }
                <span ref={scrollTo}></span>
            </div>
            <form onSubmit={submit} action="" className={s.messages__window__footer}>
                <input onChange={(e) => handleInputMessage(e.target.value)} placeholder='Введите текст' value={input} type="text" />
                <button onClick={submit}>
                    <Svg />
                </button>

            </form>
        </div>

    ))
})



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
            {
                !roomChannels() && <Divider channel={ms.channelId} />
            }

            <div className={classNames(
                s.message__line,
                { [s.message__line__right]: ms.sender === 'You' },
            )}>
                <motion.div
                    className={s.message__box}
                    initial={{ opacity: 0, y: '10%' }} animate={{ opacity: 1, y: '0', transition: { duration: 0.5 } }}>
                    {/* <p>ChannelId : {ms.channelId}</p> */}
                    <p>{ms.body}</p>
                    <span>{time}</span>
                </motion.div>

            </div>
        </>
    ))
})

const Divider = ({ channel }) => {

    return (
        <div className={s.divider}>
            <span className={s.line}></span>
            <span className={s.channelName}>{channel}</span>
            <span className={s.line}></span>
        </div>
    )
}

const Svg = () => {
    return (
        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4 16.8849L18.85 9.40488C19.66 9.05488 19.66 7.91488 18.85 7.56488L1.4 0.0848801C0.74 -0.20512 0.00999999 0.28488 0.00999999 0.99488L0 5.60488C0 6.10488 0.37 6.53488 0.87 6.59488L15 8.48488L0.87 10.3649C0.37 10.4349 0 10.8649 0 11.3649L0.00999999 15.9749C0.00999999 16.6849 0.74 17.1749 1.4 16.8849Z" fill="#083DCC" />
        </svg>
    )
}

