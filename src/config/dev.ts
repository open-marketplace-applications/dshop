const dev = () => {
  return {
    env: 'dev',
    db: process.env.MONGO_URL,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 5000,
    maxAmount: process.env.MAX_AMOUNT || 0,
  }
}

export default dev
