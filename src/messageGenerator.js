

// const loremIpsum = require('lorem-ipsum').loremIpsum;
// let init = true;
// let id = 0;
// const roomIds = ['Perry the Platypus', 'Tyler Durden', 'Amy Pond', 'Le Petit Prince', 'Dr. Heinz Doofenshmirtz', 'Gregory'];
// const channelIds = ['VK', 'OK', 'FB'];

// emit();

// function emit() {
//     if (init) {
//         init = false;
//     } else {
//         handle({
//             id: ++id,
//             roomId: randomChoose(roomIds),
//             channelId: randomChoose(channelIds),
//             body: loremIpsum({
//                 count: randomBetween(1, 5),
//                 format: 'plain',
//                 units: randomChoose(['sentences', 'words']),
//             }),
//             ts: new Date(),
//         });
//     }
//     setTimeout(emit, randomBetween(3000, 5000));
// }

// function randomBetween(min, max) {
//     return Math.floor((max - min + 1) * Math.random()) + min;
// }

// function randomChoose(array) {
//     return array[randomBetween(0, array.length - 1)];
// }

// function handle(message) {
//     // FIXME Your code goes here
//     console.log(message);
// }
