import resource from 'resource-router-middleware';
import orderModel from '../models/orderModel';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id: 'order',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let facet = facets.find(facet => facet.id === id),
			err = facet ? null : 'Not found';
		callback(err, facet);
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
		order.save().then(result => {
			console.log('result', result)
			
			response.send(result)
		}).catch(err => {
			console.log('err', err)
			response.status(500).send(err)
		})
	},

	/** GET /:id - Return a given entity */
	read({ facet }, res) {
		res.json(facet);
	},

	/** PUT /:id - Update a given entity */
	update({ facet, body }, res) {
		for (let key in body) {
			if (key !== 'id') {
				facet[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ facet }, res) {
		facets.splice(facets.indexOf(facet), 1);
		res.sendStatus(204);
	}
});
