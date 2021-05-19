import { Schema } from 'mongoose'
import { mintAsset } from '../plugins/nft/index'

const assetSchema = new Schema<IAsset>({
	name: { type: String, required: true, minlength: [1, 'name must be longer than 1 character'] }
})

interface IAsset extends Schema {}

assetSchema.pre('save', function (next) {
	let asset = this

	console.log('asset save pre: ', asset)

	mintAsset(asset.name).then(
		function (repsonse) {
			console.log('asset minted: ', repsonse)
			next()
		},
		function (error) {
			console.log('asset minted error: ', error)
			next(error)
		}
	)
})

export default assetSchema
