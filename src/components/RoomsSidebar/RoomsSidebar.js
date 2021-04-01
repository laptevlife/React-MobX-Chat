import React from 'react'
import s from './RoomsSidebar.module.scss'
import IconAvatars from './AvatarComponent'
import { useStore } from '../../Context'
import { useObserver } from "mobx-react";
// import { toJS } from 'mobx'
import classNames from 'classnames'
import { motion } from 'framer-motion';



const RoomsSidebar = React.memo(function () {
    const store = useStore()



    return useObserver(() => (
        <div className={s.rooms__sidebar}>
            <div className={s.rooms__sidebar__headline}>Perry the Platypus</div>
            <div className={s.rooms__sidebar__scrollbox}>
                {
                    store.sortRoom().map((room, index) => {
                        return (
                            <RoomCard key={index} room={room} />
                        )
                    })
                }

            </div>

        </div>
    ))
})

export default RoomsSidebar;




const RoomCard = React.memo(function ({ room }) {

    const store = useStore()

    const roomName = Object.keys(room)[0]
    // console.log(roomName);
    
    const roomNameSlice = function () {

        if (roomName.length > 14) {
            return `${roomName.slice(0, 15)}...`
        } else {
            return roomName
        }
    }

    const roomObj = Object.values(room)
    const messageLenght = roomObj[0].length
    // const messageLenght =  roomObj[0].filter(i=>i.recived === false).length
    // console.log( roomObj[0], roomObj[0].filter(i=>i.recived === false).length);
    
    const { roomId, body, ts } = roomObj[0][roomObj[0].length - 1]
    const time = ts.toLocaleTimeString().slice(0, -3)
    const messageSlice = function () {
        if (body.length > 35) {
            return `${body.slice(0, 30)}...`
        } else {
            return body
        }
    }

    return useObserver(() => (
        <div className={classNames(
            s.room__card,
            { [s.room__card__active]: roomId === store.getActiveChat() },
        )}
            onClick={() => store.setActiveChat(roomId)}
        // initial={{ opacity: 0, y: '-20%' }} animate={{ opacity: 1, y: '0', transition: { duration: 0.5 } }}
        >
            <div className={s.avatar}>
                <IconAvatars />
            </div>
            <div className={s.right__content}>
                <div className={s.line1}>
                    <h6>{roomNameSlice()}</h6>
                    <div>
                        <div className={s.msg__count}>{messageLenght}</div>
                        <div className={s.time}>{time}</div>
                    </div>
                </div>
                <div className={s.line2}>
                    <span>
                        <span className={s.name}>{roomId} - </span>
                        <span className={s.text}>{messageSlice()}</span>
                    </span>
                </div>
            </div>

        </div>
    ))
})


{/* <IconAvatars /> */ }


const arr = [

    {
        id: 1,
        roomId: 'Dr. Heinz Doofenshmirtz',
        channelId: 'FB',
        body: 'nisi ea ut',
        ts: "2021-03-30T19:17:54.195Z"
    },
    {
        id: 2,
        roomId: 'Dr. Heinz Doofenshmirtz',
        channelId: 'FB',
        body: 'tempor ex aute nostrud',
        ts: "2021-03-30T19:17:57.837Z"
    },
]



