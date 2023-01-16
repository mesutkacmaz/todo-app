const express = require('express')
const config = require('./config')

config()

const { todoRoutes } = require('./routes')

const app = express()

app.use(express.json())

app.listen(process.env.APP_PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  )

  app.use('/v1/todo-list', todoRoutes)
})
