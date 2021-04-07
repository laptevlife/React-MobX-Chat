import React from 'react'
import './App.scss';
import { useStore } from './Context';
import { useObserver } from 'mobx-react'
import RoomsSidebar from './components/RoomsSidebar/RoomsSidebar';
import MessagesBlock from './components/MessagesBlock/MessagesBlock';
const loremIpsum = require('lorem-ipsum').loremIpsum;


function App() {

  const store = useStore()

  React.useEffect(() => {
    emit()
  }, [])


  let init = true;
  let id = 0;
  const roomIds = ['Perry the Platypus', 'Tyler Durden', 'Amy Pond', 'Le Petit Prince', 'Dr. Heinz Doofenshmirtz', 'Gregory'];
  const channelIds = ['VK', 'OK', 'FB'];

  function emit() {
    let roomid = randomChoose(roomIds)
    if (init) {
      init = false;
    } else {
      handle({
        id: ++id,
        roomId: roomid ,
        channelId: randomChoose(channelIds),
        sender:  roomid,
        recived: false,
        body: loremIpsum({
          count: randomBetween(1, 5),
          format: 'plain',
          units: randomChoose(['sentences', 'words']),
        }),
        ts: new Date(),
      });
    }
    setTimeout(emit, randomBetween(3000, 6000));
  }

  function randomBetween(min, max) {
    return Math.floor((max - min + 1) * Math.random()) + min;
  }

  function randomChoose(array) {
    return array[randomBetween(0, array.length - 1)];
  }

  function handle(message) {
    // FIXME Your code goes here
    // console.log(message);
    store.pushMessage(message)
  }



  return useObserver(() => (
    <div className='App'>
      <RoomsSidebar />
      <MessagesBlock />
    </div>

  ));
}

export default App;


