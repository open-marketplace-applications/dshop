import orderSchema from '../schemas/orderSchema'
import mongoose from 'mongoose'

const Order = mongoose.model('order', orderSchema)


Order.setPayed = function (payment) {
    console.log('setOrderPayed', payment)
    let order = JSON.parse(payment.data)
    Order.findOneAndUpdate({ _id: order._id }, {status: 'payed'} ,function (error, order) {
        if (error) {
            
            console.log('error', error)
        } else {
            console.log('order', order)
        }
    });
}

export default Order

