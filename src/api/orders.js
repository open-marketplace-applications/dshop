import resource from 'resource-router-middleware';
import orderModel from '../models/orderModel';
import jwt from 'jsonwebtoken'

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id: 'order',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		console.log('load::', id)
		orderModel.findOne({ _id: id }, function (error, order) {
			callback(error, order);
		});

	},


	/** GET / - List all entities */
	index(request, response) {
		jwt.verify(request.headers['authorization'], config.jwtSecret, (err, decoded) => {
			if (err) return response.status(401).json({ message: 'Not found' })
			else {

				orderModel.find().exec().then(result => {
					response.send(result)
				}).then(err => {
					response.status(500).send(err)
				});
			}
		})
	},

	/** POST / - Create a new entity */
	create({ body }, response) {
		console.log('body', body)
		var order = new orderModel(body)
		let shipping_cost = 3.7;
		let magazin_cost = 9.0;
		if (order.country === 'Deutschland' || order.country === 'Germany' ) {
			shipping_cost = 1.55
		}
		order.shipping_cost = shipping_cost
		console.log("shipping_cost", shipping_cost, order.country);
		order.final_price = order.amount * magazin_cost + order.amount * shipping_cost
		console.log("order.final_price", order.final_price);
		order.status = 'ordered'
		order.save().then(result => {
			response.send(result)
		}).catch(err => {
			console.log('err', err)
			response.status(500).send(err)
		})
	},

	/** GET /:id - Return a given entity */
	read(request, response) {
		jwt.verify(request.headers['authorization'], config.jwtSecret, (err, decoded) => {
			if (err) return response.status(401).json({ message: 'Not found' })
			else {
				console.log(' GET /:id', request.order)
				response.json(request.order);
			}
		})
	},

	/** PUT /:id - Update a given entity */
	update({ order, body, headers }, response) {
		jwt.verify(headers['authorization'], config.jwtSecret, (err, decoded) => {
			if (err) return response.status(401).json({ message: 'Not found' })
			else {
				for (let key in body) {
					if (key !== 'id') {
						order[key] = body[key];
					}
				}
				response.sendStatus(204);
			}
		})
	},

	/** DELETE /:id - Delete a given entity */
	delete({ order, headers }, response) {
		jwt.verify(headers['authorization'], config.jwtSecret, (err, decoded) => {
			if (err) return response.status(401).json({ message: 'Not found' })
			else {
				orderModel.splice(orderModel.indexOf(order), 1);
				response.sendStatus(204);
			}
		})
	}
});
