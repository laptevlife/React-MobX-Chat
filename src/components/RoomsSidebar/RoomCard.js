import React from 'react'
import s from './RoomsSidebar.module.scss'
import IconAvatars from './AvatarComponent'
import { useStore } from '../../Context'
import { useObserver } from "mobx-react";
import classNames from 'classnames'
import { Badge, Card, makeStyles, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    badge: {
        marginRight: '10px',
    },
    actionArea: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    }

}))

const RoomCard = React.memo(function ({ room }) {

    const store = useStore()
    const classes = useStyles()

    const { roomId, sender, body, ts } = room

    const roomNameSlice = function () {
        if (roomId.length > 14) {
            return `${roomId.slice(0, 15)}...`
        } else {
            return roomId
        }
    }

    const messageLenght = store.notRecivedMessagesCount(roomId)
    const time = ts.toLocaleTimeString().slice(0, -3)

    const messageSlice = function () {
        if (body.length > 35) {
            return `${body.slice(0, 30)}...`
        } else {
            return body
        }
    }



    return useObserver(() => (

        <Card
            className={classNames(
                s.room__card,
                { [s.room__card__active]: roomId === store.getActiveChat() },
            )}
            onClick={() => store.setActiveChat(roomId)}>
            <CardActionArea className={classes.actionArea}>
                <div className={s.avatar}>
                    <IconAvatars />
                </div>
                <div className={s.right__content}>     
                    <div className={s.line1}>
                        <h6>{roomNameSlice()}</h6>

                        <div>
                            <Badge className={classes.badge} badgeContent={messageLenght} color="primary" />
                            <div className={s.time}>{time}</div>
                        </div>
                    </div>
                    <div className={s.line2}>
                        <div>
                            <span className={s.name}>{sender} - </span>
                            <span className={s.text}>{messageSlice()}</span>
                        </div>
                    </div>


                </div>
            </CardActionArea>
        </Card>
    ))
})

export default RoomCard


