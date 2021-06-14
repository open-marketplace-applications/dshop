import invoiceSchema from '../schemas/invoiceSchema'
import mongoose from 'mongoose'

const Invoice = mongoose.model('invoice', invoiceSchema)


export default Invoice
