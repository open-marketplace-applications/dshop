import orderSchema from '../schemas/orderSchema'
import mongoose from 'mongoose'

const Order = mongoose.model('order', orderSchema)
export default Order
