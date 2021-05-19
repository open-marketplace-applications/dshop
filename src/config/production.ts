const production = () => {
  return {
    env: 'production',
    db: process.env.MONGO_URL,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 8080,
    maxAmount: process.env.MAX_AMOUNT || 0,
  }
}

export default production
