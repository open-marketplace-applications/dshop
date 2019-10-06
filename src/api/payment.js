import { Router } from 'express';
import orderModel from '../models/orderModel';
var paymentModule = require('iota-payment')


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
                    paymentModule.payments.createPayment(iota_price, order).then(payment => {
                        const obj = {
                            order,
                            payment: {
                                id: payment.id,
                                address: payment.address
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


const getLivePrice = function () {
    return new Promise(async (resolve, reject) => {
        fetch('https://api.coingecko.com/api/v3/coins/iota')
            .then(res => res.json())
            .then(json => {
                console.log('EUR', json.market_data.current_price.eur)
                resolve(json.market_data.current_price.eur)
            });
    });

}

export default api
