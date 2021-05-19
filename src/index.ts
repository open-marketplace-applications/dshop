import 'core-js'
import 'regenerator-runtime/runtime'

import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as passport from 'passport'

import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import { database } from './db'

import config from './config'
import api from './api/'
import middleware from './middleware'
import User from './models/userModel'
import Wallet from './lib/wallet'
import WebSocketsServer from './lib/websockets'

// import http from "http";
// var path = require('path')
// import { initializeDb } from './db'
// import { listen } from 'socket.io'
// import * as bodyParser from 'body-parser' // deprecated
// import session from 'express-session'

let app = express()
// var paymentModule = require('iota-payment')

app.get('/hello', function (req, res) {
	res.send('Hello World!')
})

// logger
if (process.env.NODE_ENV !== 'test') {
	app.use(morgan('dev'))
}

// Express v4.16.0 and higher
// -------------------------)

app.use(express.json())
app.use(
	express.urlencoded({
		extended: true
	})
)

// app.use(
// 	bodyParser.json({
// 		limit: config.bodyLimit
// 	})
// )

app.use(passport.initialize())

var allowedOrigins = []

if (process.env.NODE_ENV == 'production') {
	allowedOrigins = ['https://dshop.einfachiota.de']
} else {
	allowedOrigins = ['http://localhost:3000', 'http://0.0.0.0:3000']
}

console.log('allowedOrigins')
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
console.log(allowedOrigins)

app.use(
	cors({
		origin: function (origin, callback) {
			// allow requests with no origin
			// (like mobile apps or curl requests)
			if (!origin) return callback(null, true)
			if (allowedOrigins.indexOf(origin) === -1) {
				var msg =
					'The CORS policy for this site does not ' + 'allow access from the specified Origin.'
				return callback(new Error(msg), false)
			}
			return callback(null, true)
		}
	})
)

const jwtOptions = {
	secretOrKey: config.jwtSecret,
	jwtFromRequest: ExtractJwt.fromHeader('authorization')
}

passport.serializeUser(function (user: any, done) {
	done(null, user.username)
})

passport.deserializeUser(function (username, done) {
	User.findOne({ username: username })
		.then(user => {
			return done(user)
		})
		.catch(done)
})

passport.use(
	'jwt',
	new JwtStrategy(jwtOptions, (jwt_payload, done) => {
		User.findOne({ username: jwt_payload.id }).then(user => {
			if (user) return done(null, user)
			else return done(null, false)
		})
	})
)

// connect to db
database().then(db => {
	// internal middleware
	app.use('/api', middleware())

	// api router
	app.use('/api', api({ config, db }))

	Wallet.init().then(data => {
		// 	console.log("err", err)
		console.log('Wallet.init data', data)
		const port = process.env.PORT || config.port
		var server = app.listen(port, () => {})

		// WebSocketsServer.run(app);
		// attach socket to the node server
		WebSocketsServer.init(server)
	})
})

export default app
