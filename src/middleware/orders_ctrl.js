import { Router } from 'express'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import config from '../config'
import orderModel from '../models/orderModel';
import Order from '../models/orderModel'


const orders = Router()

orders.get('/sendOrders', passport.authenticate('jwt') , (req, res) => {
	console.log('sendOrders')
	jwt.verify(req.headers['authorization'], config.jwtSecret, (err, decoded) => {
		if (err) return res.status(401).json({ message: 'Not found' })
		else {

			orderModel.find({status: 'payed'}).exec().then(result => {

				console.log('result', result)

				
				result.forEach(function(order){
					Order.setSent(order)
				})
				
				if(result === []) {
					res.status(200).send("no result")
				} else {
					res.status(200).send(result)
				}

			}).then(err => {
				res.status(500).send(err)
			});

		}
	})
})

export default orders
