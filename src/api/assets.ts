import resource from 'resource-router-middleware';
import assetModel from '../models/assetModel';
import jwt from 'jsonwebtoken'

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id: 'assets',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		console.log('load::', id)
		assetModel.findOne({ _id: id }, function (error, order) {
			callback(error, order);
		});

	},


	/** GET / - List all entities */
	index(request, response) {
		console.log("env", process.env.NODE_ENV)
		if (!process.env.NODE_ENV === "dev") {
			jwt.verify(request.headers['authorization'], config.jwtSecret, (err, decoded) => {
				if (err) return response.status(401).json({ message: 'Not found' })
				else {
					assetModel.find().exec().then(result => {
						response.send(result)
					}).then(err => {
						response.status(500).send(err)
					});
				}
			})
		} else {
			// Developing Environment
			assetModel.find().exec().then(result => {
				response.send(result)
			}).then(err => {
				response.status(500).send(err)
			});
		}

	},

	/** POST / - Create a new entity */
	create({ body }, response) {
		console.log('body', body)
		if (!process.env.NODE_ENV === "dev") {
			jwt.verify(request.headers['authorization'], config.jwtSecret, (err, decoded) => {
				if (err) return response.status(401).json({ message: 'Not found' })
				else {
				}
			})
		} else {
			var asset = new assetModel(body)

			asset.save().then(result => {
				console.log("result:", result);

				response.send(result)
			}).catch(err => {
				console.log('err', err)
				response.status(500).send(err)
			})
		}

	},


});
