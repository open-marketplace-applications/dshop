var fs = require('fs');
var pdf = require('dynamic-html-pdf');
var html = fs.readFileSync('./invoice_template.html', 'utf8');
import invoiceModel from '../models/invoiceModel';

function formatDateFormHuman(date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

module.exports.createInvoice = (order, payment) => {

    if (!order) return
    console.log("Create invoice for order: ", order)

    invoiceModel.countDocuments({}, function (err, c) {
        console.log('Count is ' + c);

        console.log("payment_data", payment.data)
        var invoice_data = {
            number:  c + 1,
            order_id: order.id,
            created_at: new Date(),
            payment_method: payment.method,
            payment_data: payment.data
        }
        var invoice_model = new invoiceModel(invoice_data)

        invoice_model.save().then(invoice => {

            var options = {
                format: "A4",
                orientation: "portrait",
                border: "10mm"
            };

            let magazine_vat = 9.00 * 0.07
            let magazine_net_price = 9.00 - magazine_vat

            var total_excluding_vat = (order.amount * magazine_net_price) + (order.amount * order.shipping_cost)
            var total_excluding_vat = total_excluding_vat.toFixed(2);
            var vat_total = order.amount * magazine_vat
            var vat_total = vat_total.toFixed(2)

            var payed_with_iota = payment.method == 'iota' ? true : false
            console.log("invoice", invoice)
            var document = {
                type: 'file',
                template: html,
                context: {
                    invoice: invoice,
                    payment: payment.data,
                    order: order,
                    date_with_format: formatDateFormHuman(invoice.created_at),
                    total_magazine_cost: order.amount * 9.00,
                    total_shipping_cost: order.amount * order.shipping_cost,
                    total_excluding_vat: total_excluding_vat,
                    vat_total: vat_total,
                    payed_with_iota: payed_with_iota
                },
                path: "./invoices/" + invoice.number + "_" + formatDate(invoice.created_at) + '_' + order.id + ".pdf"    // it is not required if type is buffer
            };

            console.log("create pdf")
            pdf.create(document, options)
                .then(res => {
                    console.log("success")
                    console.log(res)
                })
                .catch(error => {
                    console.log("error")
                    console.error(error)
                });

        }).catch(err => {
            console.log('err', err)
        })

    });
}