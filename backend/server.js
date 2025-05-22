const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()

const app = express()
app.use(cors());
const PORT = process.env.port || 5000

mongoose.connect(process.env.MONGODB_URL)
   .then(()=> console.log(`connected to mongodb...`))
   .catch((err)=> console.log(err))
   
app.use(express.json())
const routes = require('./routes/Todoroutes')
app.use('/',routes)



app.listen(PORT, ()=> console.log(`Listening on: ${PORT}`))
