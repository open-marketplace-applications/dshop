import { Schema } from 'mongoose'
import { mintAsset } from '../plugins/nft'

const assetSchema = new Schema({
  name: { type: String, required: true, minlength: [1, 'name must be longer than 1 character']},
})

assetSchema.pre('save', function(next) {
  let asset = this

  console.log("asset save pre: ", asset)

  mintAsset(asset.name).then(
    function(repsonse) {
      console.log("asset minted: ", repsonse)
      next()
     },
    function(error) { 
      console.log("asset minted error: ", error)
      next(error)
     }
  );
  
})

export default assetSchema
