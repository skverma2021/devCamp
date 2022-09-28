const express = require('express')
const dotenv = require('dotenv')

dotenv.config({"path":"./config/config.env"})
const PORT = process.env.PORT || 5000

const app = express()
app.listen(PORT, ()=>{
    console.log(`The server started listening in ${process.env.NODE_ENV} mode on Port ${PORT}`)
})


