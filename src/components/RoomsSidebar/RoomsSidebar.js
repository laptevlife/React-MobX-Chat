import React from 'react'
import s from './RoomsSidebar.module.scss'
import { useStore } from '../../Context'
import { useObserver } from "mobx-react";

import RoomCard from './RoomCard'



const RoomsSidebar = React.memo(function () {

    const store = useStore()
    
    return useObserver(() => (

        <div className={s.rooms__sidebar}>
            <div className={s.rooms__sidebar__headline}>You</div>
            <div className={s.rooms__sidebar__scrollbox}>
                {
                    store.getRooms().map((room, index) => {
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
