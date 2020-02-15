import { Schema } from 'mongoose'
import invoiceModel from '../models/invoiceModel';

const invoiceSchema = new Schema({
  order_id: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  payment_method:  {
    type: String,
    required: true
  },
  payment_data: {
    type: String,
    get: function(data) {
      try { 
        return JSON.parse(data);
      } catch(e) { 
        return data;
      }
    },
    set: function(data) {
      return JSON.stringify(data);
    }
  }
  
})

invoiceSchema.pre('save', function (next) {
  let invoice = this
  console.log('invoice pre save')
  next()
})

export default invoiceSchema
