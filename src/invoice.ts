var fs = require('fs')
var pdf = require('dynamic-html-pdf')
var html = fs.readFileSync('./invoice_template_iota.html', 'utf8')
import nodemailer from 'nodemailer'

var transporter = nodemailer.createTransport({
	service: 'Sendgrid',
	auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD }
})

import invoiceModel from './models/invoiceModel'

function formatDateFormHuman (date: Date) {
	var monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]

	var day = date.getDate()
	var monthIndex = date.getMonth()
	var year = date.getFullYear()

	return day + ' ' + monthNames[monthIndex] + ' ' + year
}

function formatDate (date: Date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear()

	if (month.length < 2) month = '0' + month
	if (day.length < 2) day = '0' + day

	return [year, month, day].join('-')
}

function createInvoice (order, payment) {
	if (!order) return
	console.log('Create invoice for order: ', order)

	invoiceModel.countDocuments({}, function (err, c) {
		console.log('Count is ' + c)

		console.log('payment_data', payment.data)
		var invoice_data = {
			number: c + 1,
			order_id: order.id,
			created_at: new Date(),
			payment_method: payment.method,
			payment_data: payment.data
		}
		var invoice_model = new invoiceModel(invoice_data)

		invoice_model
			.save()
			.then(invoice => {
				var options = {
					format: 'A4',
					orientation: 'portrait',
					border: '10mm'
				}

				let magazine_vat = 9.0 // * 0.07
				let magazine_net_price = 9.0 - magazine_vat

				var total_excluding_vat =
					order.amount * magazine_net_price + order.amount * order.shipping_cost
				var total_excluding_vat = total_excluding_vat.toFixed(2)
				var vat_total = (order.amount * magazine_vat).toFixed(2)

				let _payment = payment.data
				console.log('_payment', _payment)
				console.log('_payment.data', _payment.data)

				let live_price = _payment.data.info.live_price
				console.log('live_price', payment.data)

				var payed_with_iota = payment.method == 'iota' ? true : false
				console.log('invoice', invoice)
				var filename =
					invoice.number + '_' + formatDate(invoice.created_at) + '_' + order.id + '.pdf'
				var document = {
					type: 'file',
					template: html,
					context: {
						invoice: invoice,
						payment: payment.data,
						order: order,
						date_with_format: formatDateFormHuman(invoice.created_at),
						total_magazine_cost: (order.amount * 9.0) / live_price,
						total_shipping_cost: (order.amount * order.shipping_cost) / live_price,
						total_excluding_vat: total_excluding_vat / live_price,
						vat_total: vat_total / live_price,
						final_price: order.final_price / live_price,
						payed_with_iota: payed_with_iota
					},
					path: './invoices/' + filename // it is not required if type is buffer
				}

				console.log('create pdf')
				pdf
					.create(document, options)
					.then(res => {
						console.log('success')
						console.log(res)

						if (process.env.NODE_ENV == 'prod') {
							// TODO: Add i18n
							// TODO: Send invoice as attachment.
							var mailOptions = {
								from: 'no-reply@einfachIOTA.de',
								to: order.email,
								subject: 'The einfachIOTA team has received your payment.',
								text:
									'Hello ' +
									order.first_name +
									',\n\n' +
									'Thank you for the purchase. We hope you enjoy reading it,' +
									'\n' +
									'Your einfachIOTA Team.',
								attachments: [
									{
										// file on disk as an attachment
										filename: filename,
										path: res.filename,
										contentType: 'application/pdf'
									}
								]
							}

							// TODO:: ENABLE THIS
							// transporter.sendMail(mailOptions, function (err) {
							//     if (err) { console.log("Error sending mail.", err) }
							//     console.log("Paymend success message sent to: ", order.email)
							// });
						}
					})
					.catch(error => {
						console.log('error')
						console.error(error)
					})
			})
			.catch(err => {
				console.log('err', err)
			})
	})
}

export default createInvoice
