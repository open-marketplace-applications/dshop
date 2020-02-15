import { Schema } from 'mongoose'

const orderSchema = new Schema({
  first_name: {
    type: String,
    required: true, minlength: [2, 'First name must be longer than 1 character']
  },
  last_name: {
    type: String,
    required: true, minlength: [2, 'Last name must be longer than 1 character']
  },
  address: {
    type: String,
    required: true, minlength: [2, 'address must be longer than 1 character']
  },
  zip_code: {
    type: String,
    required: true, minlength: [2, 'zip_code must be longer than 1 character']
  },
  city: {
    type: String,
    required: true, minlength: [2, 'city must be longer than 1 character']
  },
  country: {
    type: String,
    required: true, minlength: [2, 'country must be longer than 1 character']
  },
  email: {
    type: String,
    required: true, minlength: [2, 'email must be longer than 1 character']
  },
  amount: {
    type: Number, required: true
  },
  final_price: {
    type: Number, required: true
  },
  print_name: {
    type: String,
    required: false, maxlength: [30, 'print_name must be shorter than 30 character']
  },
  newsletter: {
    type: Boolean
  },
  status: {
    type: String,
    required: true,
  },
  ref_address: {
    type: String,
    required: false
  },
  shipping_cost: {
    type: Number,
    required: true
  },
})

orderSchema.pre('save', function (next) {
  let order = this
  console.log('order pre save')
  next()
})

export default orderSchema
