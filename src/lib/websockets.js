// const WebSocket = require('ws');
// import config from '../config'
// import orderModel from '../models/orderModel';
// import {createOrder} from './shop'


// let socket = null;

// function run(server, port) {

//     console.log("Run websockets server...")
//     const ws = new WebSocket.Server({ server, port: 4000 });

//     ws.on('connection', function connection(_socket) {
//         socket = _socket
//         socket.on('message', function incoming(message) {
//             console.log('received: %s', message);
//             if(message === "buy") {
//                 // TODO: Rethink websocket purchase
//                 // createOrder("bodytest")
//             }
//         });

//         let response = {
//             message: `Websockets server started.`,
//         }
//         socket.send(JSON.stringify(response));
//         sendAmount()
//     });


//     console.log("Websockets server started.")

//     return ws
// }

// async function sendAmount() {
//     try {
//         orderModel.count({ status: ['payed', 'sent'] }, function (err, count) {
//             // orderModel.countDocuments({ status: ['payed', 'sent'] }, function (err, count) {

//                 console.log("count: ", count);
//             if (err) {
//                 console.log("error: ", err);
//             }

//             let response = {
//                 message: `Amount update!`,
//                 amount: config.maxAmount - count
//             }
//             socket.send(JSON.stringify(response));
//         });
//     } catch (error) {

//         console.log("catch (error).", error)
//     }
// }
// function send(message) {
//     let response = {
//         message: message,
//     }
//     socket.send(JSON.stringify(response));
// }


// module.exports = {
//     run,
//     send
// }


import socketIO from 'socket.io'
let io;
function init(server) {
    let options = {
        cors: true,
        origins: [],
    }
    if (process.env.NODE_ENV == 'production') {
        options.origins = ['https://dshop.einfachiota.de'];
    } else {
        options.origins = ['http://localhost:3000', 'http://0.0.0.0:3000'];
    }

    io = socketIO(server, options);

    io.on('connection', (socket) => {
        console.log('Client connected');
        socket.on('disconnect', () => console.log('Client disconnected'));
    });

    setInterval(() => io.emit('time', new Date().toTimeString()), 1000);


}

module.exports = { init };