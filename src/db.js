import mongoose from 'mongoose'
import config from './config'

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


export async function init() {

	try {
		console.log("connecting to db...")
		let db = await mongoose.connect(config.db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		});
		console.log("connected to db!")
	
		return db
	} catch (error) {
		console.log("error", error)
		return error
		
	}

}