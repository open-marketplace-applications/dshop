import { Router } from 'express'
import orderModel from '../models/orderModel'
import axios from 'axios'
import Wallet from '../lib/wallet'

var paypal = require('paypal-rest-sdk')

// var paymentModule = require('iota-payment')
// import Order from '../models/orderModel'

paypal.configure({
	mode: process.env.PAYPAL_MODE, // 'sandbox' or 'live'
	client_id: process.env.PAYPAL_CLIENT_ID,
	client_secret: process.env.PAYPAL_CLIENT_SECRET
})

let apiRouter = Router()

apiRouter.post('/pay_with_iota', (req, response) => {
	console.log('pay_with_iota called', req.query.id)
	var t0 = Date.now()
	if (req.query.id) {
		orderModel.findOne({ _id: req.query.id }, (error: any, order: any) => {
			console.log('error', error)
			console.log('order', order)
			if (error) {
				response.status(500).send(error)
			} else {
				// let final_price = order.final_price
				// console.log('iota_price', iota_price)
				let iota_price = 0
				if (process.env.NODE_ENV == 'dev') {
					iota_price = 1
				}
				console.log('iota_price', iota_price)

				Wallet.getAddress().then(iota_address => {
					console.log('iota_address', iota_address)

					const response_obj = {
						order,
						payment: {
							address: iota_address,
							value: iota_price
							// live_price: live_price
						}
					}
					console.log(response_obj)

					var t1 = Date.now()
					console.log('Time for pay_with_iota ' + (t1 - t0) + ' milliseconds.')

					response.send(response_obj)
				})

				// getLivePrice().then(live_price => {
				//     var iota_price = Math.ceil(final_price / live_price * 1000000)
				//     console.log('final_price', final_price)
				//     console.log('iota_price', iota_price)
				//     console.log('live_price', live_price)
				//     let obj = {}
				//     obj.order = order
				//     obj.info = {}
				//     obj.info.live_price = live_price
				//     obj.info.timestamp = Date.now() / 1000 | 0
				//     // paymentModule.createPaymentRequest({value: iota_price, data: obj}).then(payment => {
				//     //     const obj = {
				//     //         order,
				//     //         payment: {
				//     //             id: payment.id,
				//     //             address: payment.address,
				//     //             value: iota_price,
				//     //             live_price: live_price
				//     //         }
				//     //     }
				//     //     console.log(obj)
				//     //     var t1 = Date.now();
				//     //     console.log("Time for pay_with_iota " + (t1 - t0) + " milliseconds.")
				//     //     response.send(obj)
				//     // })
				// })
			}
		})
	} else {
		response.status(500).send({ error: 'No id in params.' })
	}
})

apiRouter.post('/pay_with_paypal', (req, response) => {
	console.log('pay_with_paypal called', req.query.id, req.query)

	if (req.query.id) {
		orderModel.findOne({ _id: req.query.id }, function (error: any, order: any) {
			console.log('error', error)
			console.log('order', order)
			if (error) {
				response.status(500).send(error)
			} else {
				var paypal_id = req.body.id
				console.log('paypal_id', paypal_id)
				if (paypal_id) {
					console.log('1')
					captureOrder(paypal_id, true)
						.then(response => {
							console.log('paypal response', response)
						})
						.catch(err => {
							console.log('paypal err', err)
						})
				}
			}
		})
	}
})

const checkoutNodeJssdk = require('@paypal/checkout-server-sdk')
const payPalClient = require('../lib/PayPal/payPalClient')
/**
 * This function can be used to capture an order payment by passing the approved
 * order id as argument.
 *
 * @param orderId
 * @param debug
 * @returns
 */
async function captureOrder (orderId, debug = false) {
	console.log('captureOrder orderId: ', orderId)
	try {
		const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderId)
		request.requestBody({})
		const response = await payPalClient.client().execute(request)
		if (debug) {
			console.log('Status Code: ' + response.statusCode)
			console.log('Status: ' + response.result.status)
			console.log('Order ID: ' + response.result.id)
			console.log('Links: ')
			response.result.links.forEach((item, index) => {
				let rel = item.rel
				let href = item.href
				let method = item.method
				let message = `\t${rel}: ${href}\tCall Type: ${method}`
				console.log(message)
			})
			console.log('Capture Ids:')
			response.result.purchase_units.forEach((item, index) => {
				item.payments.captures.forEach((item, index) => {
					console.log('\t' + item.id)
				})
			})
			// To toggle print the whole body comment/uncomment the below line
			console.log(JSON.stringify(response.result, null, 4))
		}
		return response
	} catch (e) {
		console.log(e)
	}
}

// const getLivePrice = function () {
// 	return new Promise(function (resolve, reject) {
// 		axios
// 			.get('https://api.coingecko.com/api/v3/coins/iota')
// 			// .then(res => res.json())
// 			.then(res => {
// 				console.log('getLivePrice - res', res)
// 				console.log('EUR', res.market_data.current_price.eur)

// 				resolve(res.market_data.current_price.eur)
// 			})
// 	})
// }

export default apiRouter

// TODO: This function is deprecated, try to check paypal payment somewhere else **true story callback hell**

/*
    api.post('/pay_with_paypal', (req, response) => {
        console.log('pay_with_paypal called', req.query.id)
        console.log('pay_with_paypal called', req.query)
        if (req.query.id) {
            orderModel.findOne({ _id: req.query.id }, function (error, order) {
                console.log('error', error)
                console.log('order', order)
                if (error) {
                    response.status(500).send(error)
                } else {
                    var paypal_id = req.body.id;
                    console.log('Hello world!')
                    console.log('paypal_id', paypal_id)
                    if (paypal_id) {
                        console.log('1')
                        paypal.payment.get(paypal_id, function (error, payment) {
                            console.log('2')
                            if (error) {
                                console.log('3')
                                console.log("error Get Payment", error);
                                throw error;
                            } else {
                                console.log('3.5')
                                console.log("Get Payment Response");
                                console.log(payment);
                                console.log("payment.state === 'approved'");
                                console.log(payment.state === 'approved');
                                console.log("payment.transactions[0].invoice_number === order._id.toString()");
                                console.log(payment.transactions[0].invoice_number === order._id.toString());
                                if (payment.state === 'approved' && payment.transactions[0].invoice_number === order._id.toString()) {
                                    console.log('amount', payment.transactions[0].amount)
                                    if (payment.transactions[0].amount.total >= order.final_price) {
                                        let payment_object = {
                                            method: "paypal",
                                            data: payment
                                        }
                                        Order.setPayed(order, payment_object)
                                        console.log("payment got approved", order);
                                        response.send({ message: 'payment got approved'})
                                    } else {
                                        console.log("the payment was not enough", error);

                                        response.status(500).send({ error: 'the payment was not enough' })
                                    }
                                } else {
                                    console.log("payment not accepted", error);
                                    response.status(500).send({ error: 'payment not accepted' })
                                }
                            }

                        });

                    } else {
                        console.log("no payment found", error);

                        response.status(500).send({error: 'no payment found'})
                    }

                }
            });

        } else {
            console.log("No id in params", error);
            response.status(500).send({ error: 'No id in params.' })
        }
    });
*/
