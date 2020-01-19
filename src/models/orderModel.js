import orderSchema from '../schemas/orderSchema'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
var paymentModule = require('iota-payment')

var transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD } });

const Order = mongoose.model('order', orderSchema)


Order.setPayed = function (order) {


    console.log('setOrderPayed - order', order)

    Order.findOne({ _id: order._id }, function(err, order) {
        if(!err) {
            if(!order) {
                // there is no order with this id
                console.log('setOrderPayed no order found.')
            } else {
                order.status = 'payed';
                order.save(function(err) {
                    if(!err) {
                        console.log("order payed ", order._id);
                        console.log('order - item', order)

                        // TODO: Add i18n 
                        var mailOptions = { from: 'no-reply@einfachIOTA.de', to: order.email, subject: 'The einfachIOTA team has received your payment.', text: 'Hello ' + order.first_name + ',\n\n' + 'Thank you for the purchase. We hope you enjoy reading it,' + '\n' + 'Your einfachIOTA Team.' };
                        transporter.sendMail(mailOptions, function(err) {
                            if (err) { console.log("Error sending mail.", err) }
                            console.log("Paymend success message sent to: ", order.email)
                        });

                        // handle ref link payout
                        if(order.ref_address) {
                            console.log('order - reflink payout to:', order.ref_address)
                            let payoutObject = {
                                address: order.ref_address, 
                                value: 0, 
                                message: 'Example reflink payout',
                                tag: 'EINFACHIOTAMAGAZINEREFLINKPAYOUT'
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
 
    Order.findOne({ _id: order._id }, function(err, order) {
        if(!err) {
            if(!order) {
                // there is no order with this id
                console.log('setOrderSent no order found.')
            } else {
                order.status = 'sent';
                order.save(function(err) {
                    if(!err) {
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

