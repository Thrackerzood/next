const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(express.json.apply({extended: true}))
//export routers
app.use("/api/home", require('./components/home'))
app.use("/api/auth", require('./components/auth'))

const mongooDB = `mongodb+srv://Thrackerzod:S88sH5tmFaLJvCVJ@cluster0.dmtbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`




async function start(){
   try{
      await mongoose.connect(mongooDB, {useNewUrlParser: true, useUnifiedTopology: true})
      app.listen(5500, () => {
         console.log('сервер работает')
      })
   }catch(Error){
      console.log(Error)
   }
}
start()