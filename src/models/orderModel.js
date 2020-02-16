import orderSchema from '../schemas/orderSchema'
import mongoose from 'mongoose'
import axios from 'axios'
import { createInvoice } from '../invoice.js';

var paymentModule = require('iota-payment')


const Order = mongoose.model('order', orderSchema)


Order.setPayed = function (order, payment) {


    console.log('setOrderPayed - order', order)

    Order.findOne({ _id: order._id }, function (err, order) {
        if (!err) {
            if (!order) {
                // there is no order with this id
                console.log('setOrderPayed no order found.')
            } else {
                order.status = 'payed';
                order.save(function (err) {
                    if (!err) {
                        console.log("order payed ", order._id);
                        console.log('order - item', order)


                        // generate invoice
                        createInvoice(order, payment)

                        // Handle Webhook notification
                        if (process.env.WEBHOOK_URL) {
                            let hock_name = 'eiMAG'
                            if (process.env.NODE_ENV == 'dev') {
                                hock_name = 'eiMAG_dev'
                            }
                            let hock_content = 'Hey, jemand hat gerade ein Magazin gekauft!'
                            if(order.amount > 1) {
                                hock_content = 'Hey, jemand hat gerade ' + order.amount + ' Magazine gekauft!'
                            }

                            axios.post(process.env.WEBHOOK_URL, {
                                content: hock_content,
                                username: hock_name
                            })
                            .then(function (response) {
                                console.log('Webhock success');
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                        }
                        // handle ref link payout
                        if (order.ref_address) {
                            console.log('order - reflink payout to:', order.ref_address)

                            // calculate iota value
                            let value = 0
                            if(process.env.NODE_ENV == 'prod') {
                                // We want to deliver 0.50€ to ref link owners
                                value = Math.round(payment.data.value * 0.02)
                            }
                            console.log("ref value ", value)
                            console.log("ref ref_address ", order.ref_address)

                            let payoutObject = {
                                address: order.ref_address,
                                value: value,
                                message: 'Example reflink payout',
                                tag: 'REFLINK9EINFACHIOTA'
                            }
                            paymentModule.payout.send(payoutObject)
                                .then(result => {
                                    console.log("reflink payout done.", result)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        }

                    }
                    else {
                        console.log("Error: could not save order " + order._id);
                    }
                });
            }

        } else {
            console.log('setOrderPayed error: ', err)
        }
    });

}



Order.setSent = function (order) {
    console.log('setOrderSent', order)

    Order.findOne({ _id: order._id }, function (err, order) {
        if (!err) {
            if (!order) {
                // there is no order with this id
                console.log('setOrderSent no order found.')
            } else {
                order.status = 'sent';
                order.save(function (err) {
                    if (!err) {
                        console.log("order sent", order);
                    }
                    else {
                        console.log("Error: could not save order " + order._id);
                    }
                });
            }

        } else {
            console.log('setOrderSent error: ', err)
        }
    });

}

export default Order

