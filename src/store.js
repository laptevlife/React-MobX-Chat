
import { toJS } from 'mobx'

export function createStore() {
  return {
    messages: [],
    // messages: arr,
    pushMessage(obj) {
      this.messages.push(obj)
    },
    sortRoom() {
      const messagesArr = toJS(this.messages).concat()
      const roomArr = []
      messagesArr.forEach((i, index) => {
        if (roomArr.includes(i.roomId)) {
          const removeIndex = roomArr.indexOf(i.roomId)
          roomArr.splice(removeIndex, 1)
        }
        roomArr.push(i.roomId)
      })
      const sortArr = []
      roomArr.forEach(i => {
        sortArr.push({ [i]: messagesArr.filter(mess => mess.roomId === i) })
      })
      return sortArr.reverse()
    },

    activeChat: null,
    // activeChat: 'Tyler Durden',
    setActiveChat(id) {
      this.activeChat = id
      // this.messages = this.messages.map(m=> m.roomId === id ?   { ...m, recived : true} : m )
      this.filterRecivedMessages()
      
    },
    getActiveChat() {
      return this.activeChat
    },

    filterRecivedMessages(){
              this.messages = this.messages.map(m=> m.roomId === this.activeChat ?   { ...m, recived : true} : m )
    },

    chanelFilter: '',

    setchanelFilter(filter){
      this.chanelFilter = filter
    },
    

    getRoomMessages() {
      const messagesArr = toJS(this.messages).concat()
   
      if(this.chanelFilter !== ''){
        return messagesArr.filter(mess => mess.roomId === this.activeChat).filter(mess=> mess.channelId === this.chanelFilter)
      }
      return messagesArr.filter(mess => mess.roomId === this.activeChat)
    },
 
  }
}



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
  {
    id: 3,
    roomId: 'Gregory',
    channelId: 'VK',
    body: 'exercitation laborum minim',
    ts: "2021-03-30T19:18:01.542Z"
  },
  {
    id: 4,
    roomId: 'Perry the Platypus',
    channelId: 'VK',
    body: 'Enim ad consectetur nulla dolore eiusmod velit voluptate mollit voluptate pariatur. Id tempor culpa qui cillum duis occaecat veniam. Ipsum labore eiusmod dolor aliqua ad velit aliquip. Mollit mollit magna labore dolore laborum cupidatat. Do amet fugiat occaecat non.',
    ts: "2021-03-30T19:18:06.032Z"
  },
  {
    id: 5,
    roomId: 'Gregory',
    channelId: 'FB',
    body: 'velit',
    ts: "2021-03-30T19:18:10.586Z"
  },
  {
    id: 6,
    roomId: 'Dr. Heinz Doofenshmirtz',
    channelId: 'FB',
    body: 'Pariatur reprehenderit nisi duis voluptate fugiat excepteur eu est exercitation.',
    ts: "2021-03-30T19:18:15.511Z"
  },
  {
    id: 7,
    roomId: 'Dr. Heinz Doofenshmirtz',
    channelId: 'OK',
    body: 'ipsum occaecat non sint',
    ts: "2021-03-30T19:18:19.775Z"
  },
  {
    id: 8,
    roomId: 'Tyler Durden',
    channelId: 'FB',
    body: 'ullamco',
    ts: "2021-03-30T19:18:23.816Z"
  },
  {
    id: 9,
    roomId: 'Perry the Platypus',
    channelId: 'OK',
    body: 'Voluptate irure id sunt aute magna ut laborum Lorem. Eiusmod laboris ex reprehenderit adipisicing ullamco reprehenderit. Ipsum est esse et amet dolore esse anim tempor tempor sit. Culpa ea fugiat aliquip dolor sit tempor elit irure in incididunt sint nulla reprehenderit.',
    ts: "2021-03-30T19:18:27.349Z"
  },
  {
    id: 10,
    roomId: 'Amy Pond',
    channelId: 'FB',
    body: 'incididunt',
    ts: "2021-03-30T19:18:31.607Z"
  },
  {
    id: 11,
    roomId: 'Amy Pond',
    channelId: 'OK',
    body: 'dolore',
    ts: "2021-03-30T19:18:35.169Z"
  },
  {
    id: 12,
    roomId: 'Tyler Durden',
    channelId: 'VK',
    body: 'Ex aute ea est pariatur sit sunt culpa dolor Lorem do non adipisicing fugiat.',
    ts: "2021-03-30T19:18:39.775Z"
  },
  {
    id: 13,
    roomId: 'Gregory',
    channelId: 'VK',
    body: 'Adipisicing laborum Lorem non non fugiat consequat velit laborum excepteur labore est amet.',
    ts: "2021-03-30T19:18:44.077Z"
  },
  {
    id: 14,
    roomId: 'Perry the Platypus',
    channelId: 'FB',
    body: 'Minim officia labore laboris ad incididunt sit consequat occaecat eu adipisicing laborum. Nulla veniam sint commodo officia pariatur exercitation proident nulla adipisicing minim. Commodo ut commodo amet consequat irure excepteur Lorem voluptate reprehenderit quis ullamco quis laborum. Sint veniam ullamco veniam adipisicing aliquip excepteur sint commodo et. Ad incididunt labore enim do ea occaecat consectetur amet minim excepteur quis pariatur esse eu.',
    ts: ' 2021-03-30T19:18:47.853Z'
  },
  {
    id: 15,
    roomId: 'Amy Pond',
    channelId: 'FB',
    body: 'dolore cillum sunt mollit',
    ts: "2021-03-30T19:18:52.302Z"
  },
  {
    id: 16,
    roomId: 'Gregory',
    channelId: 'VK',
    body: 'occaecat laborum',
    ts: "2021-03-30T19:18:55.521Z"
  },
  {
    id: 17,
    roomId: 'Tyler Durden',
    channelId: 'OK',
    body: 'aute culpa sint',
    ts: "2021-03-30T19:19:00.479Z"
  },
  {
    id: 18,
    roomId: 'Tyler Durden',
    channelId: 'OK',
    body: 'ex',
    ts: "2021-03-30T19:19:05.043Z"
  },
  {
    id: 19,
    roomId: 'Dr. Heinz Doofenshmirtz',
    channelId: 'OK',
    body: 'sit culpa',
    ts: "2021-03-30T19:19:10.050Z"
  },
  {
    id: 20,
    roomId: 'Tyler Durden',
    channelId: 'FB',
    body: 'Aliquip amet consequat dolor occaecat.',
    ts: "2021-03-30T19:19:13.803Z"
  },
  {
    id: 21,
    roomId: 'Tyler Durden',
    channelId: 'FB',
    body: 'ipsum nisi veniam',
    ts: "2021-03-30T19:19:18.224Z"
  }

]