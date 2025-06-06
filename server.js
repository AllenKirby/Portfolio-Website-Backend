require('dotenv').config()

const express = require('express')
const cors = require('cors')
const route = require('./Routes/route.js')

const app = express()

app.use(cors())

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next() 
})

app.use('/api', route)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});