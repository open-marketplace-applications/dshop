import assetSchema from '../schemas/assetSchema'
import mongoose from 'mongoose'

const Asset = mongoose.model('asset', assetSchema)


export default Asset
