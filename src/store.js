
import { toJS } from 'mobx'

export function createStore() {
  return {
    messages: [],

    pushMessage(obj) {
      this.messages.push(obj)
    },

    getMessages(){
      return this.messages
    },

    getRooms(){
      const messagesArr = toJS(this.messages).concat()
      const roomsNamesArr = []
      const roomsObjectsArr = []

      messagesArr.forEach((message, index) => {
        if (roomsNamesArr.includes(message.roomId)) {
          const removeIndex = roomsNamesArr.indexOf(message.roomId)
          roomsNamesArr.splice(removeIndex, 1)
          roomsObjectsArr.splice(removeIndex, 1)
        }
        roomsNamesArr.push(message.roomId)
        roomsObjectsArr.push(message)
      })
      return roomsObjectsArr.reverse()
      
    }, 

    activeChat: null,

    setActiveChat(id) {
      this.activeChat = id
      this.filterRecivedMessages()

    },
    getActiveChat() {
      return this.activeChat
    },

    filterRecivedMessages() {
      this.messages = this.messages.map(m => {
        return (
          m.roomId === this.activeChat
            ? { ...m, recived: true }
            : m
        )
      })
    },

    notRecivedMessagesCount(roomId){
      return this.messages.filter(i => i.roomId === roomId && i.recived === false).length
    },


    channelFilter: '',

    setchannelFilter(filter) {
      this.channelFilter = filter
    },


    getRoomMessages() {
      const messagesArr = toJS(this.messages).concat()

      if (this.channelFilter !== '') {
        return (
          messagesArr.filter(mess => mess.roomId === this.activeChat)
                     .filter(mess => mess.channelId === this.channelFilter)
        )
      }
      return messagesArr.filter(mess => mess.roomId === this.activeChat)
    },

  }
}


