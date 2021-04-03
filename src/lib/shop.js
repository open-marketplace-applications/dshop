import orderModel from '../models/orderModel';
import Wallet from '../lib/wallet';

export function createOrder(body) {

    console.log('body', body)
    var order = new orderModel()
    let shipping_cost = 3.7;
    let magazin_cost = 9.0;
    if (order.country === 'Deutschland' || order.country === 'Germany') {
        shipping_cost = 1.55
    }
    order.shipping_cost = shipping_cost
    console.log("shipping_cost", shipping_cost, order.country);
    order.final_price = order.amount * magazin_cost + order.amount * shipping_cost
    console.log("order.final_price", order.final_price);
    order.status = 'ordered'

    Wallet.getAddress().then(address => {
        order.address = address;

        order.save().then(result => {
            console.log("result:", result);
            // clear id
            let res = {
                id: result._id,
                final_price: result.final_price,
                iota_address: result.address,
            }
            console.log("res:", res);
            return res
        }).catch(err => {
            console.log('err', err)
            return err
        })
    })
}