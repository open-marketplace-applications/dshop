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


export const database = new Promise(function (myResolve, myReject) {

	try {
		console.log("connecting to db...")
		let db = mongoose.connect(config.db, {
			useNewUrlParser: true,
			// TODO: ENABLE THIS FOR PRODUCTION
			// useUnifiedTopology: true, 
			useFindAndModify: false,
			useCreateIndex: true
		});
		console.log("connected to db!")

		myResolve(db); // when successful
	} catch (error) {
		console.log("error", error)
		myReject(error);

	}
});