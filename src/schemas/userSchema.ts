import { NativeError, Schema } from 'mongoose'
import * as bcrypt from 'bcrypt'

const userSchema = new Schema({
	username: { type: String, minlength: [4, 'Username must be longer than 3 character'] },
	password: { type: String, minlength: [4, 'Password must be longer than 3 character'] }
})

userSchema.pre('save', async next => {
	let user: { isModified: (arg0: string) => any; password: string | Buffer } = this
	let saltRounds = 5

	if (!user.isModified('password')) return next()

	bcrypt.genSalt(saltRounds, (err, salt) => {
		if (err) return next(err)
		bcrypt.hash(user.password, salt, (err: NativeError, hash: any) => {
			if (err) return next(err)
			user.password = hash
			next()
		})
	})
})

export default userSchema
