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
import {init} from './db';

let app = express();
// var paymentModule = require('iota-payment')

app.get('/hello', function (req, res) {
	res.send("Hello World!");
});

// paymentModule.onEvent('paymentSuccess', onPaymentSuccess);

var iota_pay_options = {
	dashboard: true,
	api: true,
	websockets: true
}

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

if (process.env.NODE_ENV == 'prod') {
	allowedOrigins = ['https://shop.einfachiota.de', 'https://shop.einfachiota.com'];
} else {
	allowedOrigins = ['http://localhost:3000', 'http://0.0.0.0:3001', 'http://localhost:3001', 'http://localhost:5000', 'https://magazin.einfachiota.de', 'http://localhost:9080', 'http://localhost:8000'];
}

console.log("allowedOrigins");
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
init().then(db => {

	console.log("initializeDb", db)

	// internal middleware
	app.use('/api', middleware({ config, db }));

	// api router
	app.use('/api', api({ config, db }));

	Wallet.init().then((err, data) => {
	// 	console.log("err", err)
	// 	console.log("data", data)
		const port = process.env.PORT || config.port
		app.listen(port, callback);

		console.log(`Started on port ${port}`);

		WebSocketsServer.run(app);
	});

});

const callback = function (res) {
	console.log(`Sresresres ${res}`);

}

export default app;
