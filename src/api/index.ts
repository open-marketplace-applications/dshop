let pack = require('../../package.json')
import { Router } from 'express'
import orders from './orders'
import auth from './auth'
import app from '../index'
import payment from './payment'
import assets from './assets'

export default ({ config, db }) => {
	let api = Router()

	// mount the facets resource
	api.use('/orders', orders({ config, db }))
	api.use('/auth', auth)
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		console.log('tst')
		res.json({
			version: pack.version,
			// Unique shop id // timestamp + hash
			id: 'uniqueshopid',
			// Owner of the shop as DID
			owner: 'did:iota:iotadidhash',
			// This url returns a list off all products as json
			product_list_url: 'http://localhost:5000/api/products',
			category: 'Magazines'
		})
	})
	api.use(payment)
	api.use('/assets', assets({ config, db }))

	return api
}
