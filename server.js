const express = require('express')
const cors = require('cors')
const pruductRoutes = require('./routes/productRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products',pruductRoutes)

module.exports = app;