const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyesun:abcd1234@boilerplate.x7hkm.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlnpmParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connercted...'))
.catch(err => console.log(err))

//var database; function connectDB() { 
//var databaseUrl = 'mongodb+srv://hyesun:abdc1234@boilerplate.x7hkm.mongodb.net/test'; }

  
app.get('/', (req, res) => {
  res.send('Hello W2orld!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


