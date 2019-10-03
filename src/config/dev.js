const dev = () => {
  return {
    env: 'dev',
    db: process.env.MONGO_URL,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 5000,
  }
}

export default dev
