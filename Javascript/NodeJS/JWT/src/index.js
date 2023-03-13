const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT
const route = require('./routes/user.routes')

app.use(express.json())
app.use('/user', route)

app.listen(port, ()=> {
    console.log(`Listen on ${port}`)
})