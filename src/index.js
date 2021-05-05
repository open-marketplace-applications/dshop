import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
var path = require('path');

import "core-js/stable";
import "regenerator-runtime/runtime";

import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config';
import passport from 'passport'
import User from './models/userModel'
import Wallet from './lib/wallet'
import WebSocketsServer from './lib/websockets'
import {database} from './db';
import {listen} from 'socket.io';


let app = express();
// var paymentModule = require('iota-payment')

app.get('/hello', function (req, res) {
	res.send("Hello World!");
});

// logger
if (process.env.NODE_ENV !== 'test') {
	app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(bodyParser.json({
	limit: config.bodyLimit
}));

app.use(passport.initialize({ session: false }))

var allowedOrigins = [];

if (process.env.NODE_ENV == 'production') {
	allowedOrigins = ['https://dshop.einfachiota.de'];
} else {
	allowedOrigins = ['http://localhost:3000', 'http://0.0.0.0:3000'];
}

console.log("allowedOrigins");
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log(allowedOrigins);
app.use(cors({
	origin: function (origin, callback) {
		// allow requests with no origin 
		// (like mobile apps or curl requests)
		if (!origin) return callback(null, true);
		if (allowedOrigins.indexOf(origin) === -1) {
			var msg = 'The CORS policy for this site does not ' +
				'allow access from the specified Origin.';
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	}
}));

const jwtOptions = {
	secretOrKey: config.jwtSecret,
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
}

passport.serializeUser(function (user, done) {
	done(null, user.username);
})

passport.deserializeUser(function (username, done) {
	User.findOne({ username: username })
		.then((user) => {
			return done(user)
		})
		.catch(done)
})

passport.use('jwt', new JwtStrategy(jwtOptions, (jwt_payload, done) => {
	User.findOne({ username: jwt_payload.id })
		.then(user => {
			if (user) return done(null, user)
			else return done(null, false)
		})
}))

// connect to db
database.then(db => {
	// internal middleware
	app.use('/api', middleware({ config, db }));

	// api router
	app.use('/api', api({ config, db }));

	Wallet.init().then((err, data) => {
	// 	console.log("err", err)
	// 	console.log("data", data)
		const port = process.env.PORT || config.port
		var server = app.listen(port, callback);
		// WebSocketsServer.run(app);
		// attach socket to the node server
		// attach socket to the node server
		WebSocketsServer.init(server);
	});

});

const callback = function (res) {
	console.log(`Sresresres ${res}`);

}

export default app;
