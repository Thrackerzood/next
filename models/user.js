const {Schema, model} = require('mongoose')

const user = new Schema({
   user_name: String,
   email: String,
   password: String,
   old_password: String,
   chat_id: String,
   date_registration: String,
   rating: Number,
   post_id: String,
   avatar: String,
   old_avatar: String,
   commentaries_id: String,
})

module.exports = model('User', user)