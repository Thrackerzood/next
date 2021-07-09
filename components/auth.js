const User = require('../models/user')
const {Router} = require('express')
const user = require('../models/user')
const router = Router()

router.post('/registration', async (req,res)=>{
   console.log(req.body)
   try{
      if(req.body.password === req.body.repeat){
         const user = new User({
         user_name: req.body.login,
         email: req.body.email,
         password: req.body.password
      })
      await user.save()
      }
   }catch(error){
      console.log(error)
   }
})

module.exports = router