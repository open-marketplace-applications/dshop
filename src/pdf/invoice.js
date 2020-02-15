var fs = require('fs');
var pdf = require('dynamic-html-pdf');
var html = fs.readFileSync('./invoice_template.html', 'utf8');

// Custom handlebar helper
pdf.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
})

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
};

var users = [
    {
        name: 'aaa',
        age: 24,
        dob: '1/1/1991'
    },
    {
        name: 'bbb',
        age: 25,
        dob: '1/1/1995'
    },
    {
        name: 'ccc',
        age: 24,
        dob: '1/1/1994'
    }
];

var document = {
    type: 'file',     // 'file' or 'buffer'
    template: html,
    context: {
        users: users
    },
    path: "./invoices/output.pdf"    // it is not required if type is buffer
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