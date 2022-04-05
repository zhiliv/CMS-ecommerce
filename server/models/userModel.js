const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    username: {
      // имя пользователя
      type: String,
      required: true,
    },
    email: {
      // адрес электронной почты
      type: String,
      required: true,
    },
    password: {
      // пароль
      type: String,
      minlength: 6,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Users', UserSchema)
