import { model, Schema, Document, Types, Model } from 'mongoose'

type ID = Types.ObjectId

export interface IOrder {
	first_name: String
	last_name: String
	address: String
	zip_code: String
	city: String
	country: String
	email: String
	amount: Number
	final_price: Number
	status: String
	ref_address: String
	shipping_cost: Number
	// boss: ID | IOrderDocc
}

export interface IOrderDoc extends IOrder, Document {
	// getEmployees(): Promise<IOrderDoc	[]>
}

export interface IOrderModel extends Model<IOrderDoc> {
	setPayed(age: number): void //Promise<IOrderDoc>
}

const OrderSchemaFields: Record<keyof IOrder, any> = {
	first_name: {
		type: String,
		required: true,
		minlength: [2, 'First name must be longer than 1 character']
	},
	last_name: {
		type: String,
		required: true,
		minlength: [2, 'Last name must be longer than 1 character']
	},
	address: {
		type: String,
		required: true,
		minlength: [2, 'address must be longer than 1 character']
	},
	zip_code: {
		type: String,
		required: true,
		minlength: [2, 'zip_code must be longer than 1 character']
	},
	city: {
		type: String,
		required: true,
		minlength: [2, 'city must be longer than 1 character']
	},
	country: {
		type: String,
		required: true,
		minlength: [2, 'country must be longer than 1 character']
	},
	email: {
		type: String,
		required: true,
		minlength: [2, 'email must be longer than 1 character']
	},
	amount: {
		type: Number,
		required: true
	},
	final_price: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	ref_address: {
		type: String,
		required: false
	},
	shipping_cost: {
		type: Number,
		required: true
	}
}

const orderSchema = new Schema(OrderSchemaFields)

// orderSchema.methods.setPayed = function (payment) {}
orderSchema.pre('save', function (next) {
	let order = this
	console.log('order pre save')
	next()
})

export { orderSchema }
