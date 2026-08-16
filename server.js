const express = require('express')
const cors = require('cors')
const pruductRoutes = require('./routes/productRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products',pruductRoutes)

const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`)
})