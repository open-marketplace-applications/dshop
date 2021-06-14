import { MongoMemoryServer } from 'mongodb-memory-server'
const mongoServer = new MongoMemoryServer()

const test = async () => {
	const mongoUri = await mongoServer.getUri()

	return {
		env: 'test',
		db: mongoUri,
		jwtSecret: process.env.JWT_SECRET,
		port: process.env.PORT || 8080,
		maxAmount: process.env.MAX_AMOUNT || 0
	}
}

export default test
