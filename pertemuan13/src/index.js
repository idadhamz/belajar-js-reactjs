
const express = require('express')
require('./db/mongoose')

const app = express()
const port = 3000

const userRouter = require('./routers/user')

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
  console.log(`Server is running in ${port}`)
})
