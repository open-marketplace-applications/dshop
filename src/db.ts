import * as mongoose from 'mongoose'
import config from './config'

export const database = () =>
	new Promise(function (myResolve, myReject) {
		try {
			console.log('connecting to db...')
			let db = mongoose.connect(config.db, {
				// useUnifiedTopology: true, // TODO: ENABLE THIS FOR PRODUCTION
				useNewUrlParser: true,
				useFindAndModify: false,
				useCreateIndex: true
			})
			console.log('connected to db!')

			myResolve(db) // when successful
		} catch (error) {
			console.log('error', error)
			myReject(error)
		}
	})

// mongoose.Promise = global.Promise
// const db = mongoose.connection
// export default callback => {
// 	mongoose.connect(config.db, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useFindAndModify: false,
// 		useCreateIndex: true
// 	});
// 	callback(db);
// }
