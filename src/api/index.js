import { version } from '../../package.json';
import { Router } from 'express';
import orders from './orders';
import auth from './auth'
import app from '../index.js';
import payment from './payment.js'

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/orders', orders({ config, db }))
	api.use('/auth', auth)
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		console.log("tst")
		res.json({ version });
	});
	api.use(payment)

	return api;
}
