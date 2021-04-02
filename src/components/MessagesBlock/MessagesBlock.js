import React from 'react'
import s from './MessagesBlock.module.scss'
import SimpleSelect from './Select'
import { useStore } from '../../Context'
import { useObserver } from "mobx-react";
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid'
import classNames from 'classnames'

import { toJS } from 'mobx'
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
    // }, [])

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

const body = 'Lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda beatae id et ex ipsum incidunt ullam error asperiores vitae nesciunt ad, aperiam accusamus illum fuga facilis dolor est deserunt, delectus fugit voluptatem eveniet facere possimus similique! Hic ipsa deleniti placeat provident quas eaque tempore odio quaerat exercitationem! Quidem natus unde facilis, numquam tempora magni vel odit et aspernatur porro laudantium adipisci! Ad exercitationem, temporibus molestiae neque esse autem dicta quas eos porro eius impedit aperiam itaque explicabo quisquam, placeat amet debitis aut ex at nulla! Dolor obcaecati quaerat sequi aut fugiat alias explicabo? Magnam dolore veniam possimus quibusdam corporis.dolor sit amet, consectetur adipisicing elit. Quo ullam soluta eius numquam, ab et odio quia facere vitae repellat recusandae corporis voluptas atque accusantium animi quae aspernatur dolor mollitia cumque? Delectus, blanditiis. Similique ullam quas cupiditate at temporibus aut impedit quasi odio, ipsam modi voluptas dicta praesentium est? Deserunt fugiat earum similique omnis minima rem natus aperiam enim nostrum quisquam? Ducimus, sint eligendi. Dignissimos recusandae at officiis repellendus libero, quae rem obcaecati. Ex perferendis minus, fuga laudantium error consequatur dolorem? Iure quaerat tenetur error cupiditate et incidunt odit magni autem, voluptatem aliquid dignissimos harum dicta amet eius. Nostrum sint atque consectetur aut natus, iste ducimus cumque fugiat laudantium alias voluptatum nam velit perferendis officiis optio quod officia commodi facilis eius. Officiis reprehenderit labore sequi maiores provident quidem, quo natus nostrum dignissimos architecto, voluptatibus, harum placeat sed consectetur libero repudiandae illum soluta nisi assumenda deleniti molestiae ea molestias! Tempora perspiciatis ratione dolorem, quod quos deserunt odio. Expedita necessitatibus, quo non sunt, porro ea, minima obcaecati veniam atque accusantium nam! Ad eaque nam voluptatem, odit dolores fugiat corporis, dolorem earum nostrum vitae explicabo facilis officiis pariatur fugit perferendis impedit animi. Rem pariatur, delectus officiis minus nobis cupiditate commodi iure placeat quas voluptatem. Maxime, explicabo? Voluptatum accusamus, adipisci vero deserunt vel libero voluptates cum cumque ea neque at commodi voluptate! Veritatis illum id ipsa! Provident aperiam eveniet suscipit beatae, explicabo deserunt. Aut eveniet nobis laborum numquam vitae inventore architecto in quae est commodi nihil maiores, porro corporis libero, repellendus accusantium cum aspernatur illum consequuntur? Asperiores fuga ab dolorem corrupti nisi. Nihil error officiis expedita voluptatibus eligendi voluptas. Nobis, esse pariatur. Voluptates odit eveniet saepe fuga consectetur ea quas iure quod reiciendis, pariatur porro id sit ipsam commodi molestiae explicabo, a ut, quisquam voluptatum incidunt? Nobis autem ducimus beatae id libero hic expedita quam culpa tempora. Maiores enim dignissimos sint quam quaerat. Harum hic consectetur culpa, sed numquam nemo? Necessitatibus eligendi maxime dignissimos sunt eum doloremque temporibus voluptates, nihil a, iste dolore, delectus consequatur. Distinctio fugit error dolor! Quae, unde. Nostrum ut aspernatur rem alias ullam sint ipsum? Ut aliquam beatae assumenda libero praesentium perspiciatis adipisci. Iusto asperiores dolorum animi, sed similique modi expedita eum nemo! Quaerat vel, ex at cumque voluptate ullam exercitationem molestias corrupti eius adipisci impedit est. Natus nobis reprehenderit magnam nam tempore quas, sed, consectetur adipisci distinctio fugit id exercitationem quia impedit ducimus ea atque commodi, ab similique autem illo eum assumenda. Quaerat odio dicta soluta eum quo itaque temporibus earum beatae, accusantium perspiciatis obcaecati! Vero, amet sequi est fuga dolorem suscipit ad sint consequatur dolor nostrum dolores eaque veritatis, reiciendis a praesentium recusandae tempore quam! Ex repellat tenetur voluptate consectetur, quasi laboriosam. Illum quaerat architecto alias reprehenderit! At veniam eligendi in odit, earum dignissimos debitis perferendis magnam, nesciunt quas eveniet saepe incidunt delectus molestiae consequatur exercitationem, dolores neque eaque tempora asperiores pariatur molestias. Repudiandae reprehenderit rem sequi, perspiciatis cumque veniam libero fugiat dolore, expedita suscipit fuga officiis qui magnam quo veritatis nihil reiciendis itaque eius est natus enim?'

const MessageLine = React.memo(({  ms, index }) => {
    const store = useStore()
    const time = ms.ts.toLocaleTimeString().slice(0, -3)
    const roomMessages = store.getRoomMessages()

    const roomChannels = ()=>{
        if (index >= 1){
            return roomMessages[index].channelId === roomMessages[index-1].channelId ? true : false
        }else{
            return false
        }
    }
 

    return useObserver(() => (
        <>
            {
                !roomChannels() && <Divider channel = {ms.channelId}/>
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

