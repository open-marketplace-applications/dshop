import { Router } from 'express';
import orderModel from '../models/orderModel';
var paymentModule = require('iota-payment')
var paypal = require('paypal-rest-sdk');
import Order from '../models/orderModel'

paypal.configure({
    'mode': process.env.PAYPAL_MODE, // 'sandbox' or 'live'
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET
});

let api = Router();


api.post('/pay_with_iota', (req, response) => {
    console.log('pay_with_iota called', req.query.id)
    if (req.query.id) {

        orderModel.findOne({ _id: req.query.id }, function (error, order) {
            console.log('error', error)
            console.log('order', order)
            if (error) {
                response.status(500).send(error)
            } else {
                let final_price = order.final_price
                getLivePrice().then(live_price => {
                    var iota_price = Math.ceil(final_price / live_price * 1000000)
                    console.log('final_price', final_price)
                    console.log('iota_price', iota_price)
                    console.log('live_price', live_price)
                    let obj = {}
                    obj.order = order
                    obj.info = {}
                    obj.info.live_price = live_price
                    obj.info.timestamp = Date.now() / 1000 | 0

                    if(process.env.NODE_ENV == 'dev') {
                        iota_price = 1
                    }
                    console.log('iota_price', iota_price)

                    paymentModule.createPaymentRequest({value: iota_price, data: obj}).then(payment => {
                        const obj = {
                            order,
                            payment: {
                                id: payment.id,
                                address: payment.address,
                                value: iota_price,
                                live_price: live_price
                            }
                        }
                        console.log(obj)

                        response.send(obj)
                    })
                })

            }
        });

    } else {
        response.status(500).send({ error: 'No id in params.' })
    }
});

api.post('/pay_with_paypal', (req, response) => {
    console.log('pay_with_paypal called', req.query.id)
    if (req.query.id) {
        orderModel.findOne({ _id: req.query.id }, function (error, order) {
            console.log('error', error)
            console.log('order', order)
            if (error) {
                response.status(500).send(error)
            } else {
                
                var payment = req.body.payment;
                if (payment) {
                    console.log('payment', payment)
                    paypal.payment.get(payment.id, function (error, payment) {
                        if (error) {
                            console.log(error);
                            throw error;
                        } else {
                            console.log("Get Payment Response");
                            console.log(payment);
                            if (payment.state === 'approved' && payment.transactions[0].invoice_number === order._id.toString()) {
                                console.log('amount', payment.transactions[0].amount)
                                if (payment.transactions[0].amount.total >= order.final_price) {
                                    let payment_object = {
                                        method: "paypal",
                                        data: payment
                                    }
                                    Order.setPayed(order, payment_object)
                                    response.send({ message: 'payment got approved'})
                                } else {
                                    response.status(500).send({ error: 'the payment was not enough' })
                                }
                            } else {
                                response.status(500).send({ error: 'payment not accepted' })
                            }
                        }

                    });

                } else {
                    response.status(500).send({error: 'no payment found'})
                }


            }
        });

    } else {
        response.status(500).send({ error: 'No id in params.' })
    }
});


const getLivePrice = function () {
    return new Promise(function(resolve, reject) {
        fetch('https://api.coingecko.com/api/v3/coins/iota')
            .then(res => res.json())
            .then(json => {
                console.log('EUR', json.market_data.current_price.eur)
                resolve(json.market_data.current_price.eur)
            });
    });

}

export default api
