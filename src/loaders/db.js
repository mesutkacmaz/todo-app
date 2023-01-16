const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      connectTimeoutMS: 1000,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Could not be able to connect to the db: ${error.message}`)
  }
}

module.exports = {
  connectDB,
}
