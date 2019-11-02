import resource from 'resource-router-middleware';
import orderModel from '../models/orderModel';

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
	index({ params }, response) {

		orderModel.find().exec().then(result => {
			response.send(result)
		}).then(err => {
			response.status(500).send(err)
		});
	},

	/** POST / - Create a new entity */
	create({ body }, response) {
		console.log('body', body)
		var order = new orderModel(body)
		let shipping_cost = 3.7;
		let magazin_cost = 9.0;
		if (order.country === 'de') {
			shipping_cost = 1.55
		}
		console.log("shipping_cost", shipping_cost, order.country);
		order.final_price = order.amount * magazin_cost + shipping_cost
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
	read({ order }, res) {
		console.log(' GET /:id', order)
		res.json(order);
	},

	/** PUT /:id - Update a given entity */
	update({ order, body }, res) {
		for (let key in body) {
			if (key !== 'id') {
				order[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ order }, res) {
		orderModel.splice(orderModel.indexOf(order), 1);
		res.sendStatus(204);
	}
});
