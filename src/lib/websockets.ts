// const WebSocket = require('ws');
import config from '../config'
import orderModel from '../models/orderModel'
// import {createOrder} from './shop'

import socketIO from 'socket.io'
let io

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

function init (server) {}

function send (message) {
	let response = {
		message
	}
	io.emit('update', JSON.stringify(response))
}

// module.exports = {
//     run,
//     send
// }

let WebSocketsServer = { send, init }

export default WebSocketsServer
