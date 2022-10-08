const fs = require('fs') // модуль для работы с файловой системой
const bcrypt = require('bcryptjs') // модуль для шифрования данных
const jwt = require('jsonwebtoken') // модуль для работы с токенами
const userModel = require('../models/userModel') // модуль для работы с таблицей Users
const config = JSON.parse(fs.readFileSync('config.json')) // файл конфигурации
let loadedUser // переменная для хранения найденных данных пользователя

/*
 * Создание пользователя
 * @module createUser
 */
exports.createUser = async (ctx, next) => {
  const { username, email, password } = ctx.request.body // получение параметров из запроса
  try {
    const fndUser = await userModel.findOne({ username }).catch((error) => {
      ctx.status = 409
      ctx.throw(`Ошибка поиска пользователя: ${error}`)
    }) // поиск пользователя

    const hashedPassword = await bcrypt.hash(password, 12) // шифровка пароля
    if (!fndUser) {
      // eslint-disable-next-line new-cap
      const user = new userModel({
        username,
        email,
        password: hashedPassword,
      }) // формирование объекта пользователя
      const result = await user.save() // сохранение данных пользователя
      ctx.status = 200
      ctx.body = {
        message: 'Пользователь создан успешно', // установка сообщения
        user: { id: result._id, email: result.email },
      }
    }
  } catch (err) {
    ctx.status = 500
    ctx.throw(`Произошла ошибка: ${err}`)
  }
}

/*
 * Проверка авторизации пользователя
 * @module signLogin
 */
exports.signLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body // получение имени пользователя и пароля во входных параметрах
  const user = await userModel.findOne({ username }).catch((error) => {
    // поиск пользователя в БД
    ctx.status = 500
    ctx.throw(`Ошибка поиска пользователя: ${error}`)
  })

  if (!user) {
    // если пользователь не найден
    ctx.status = 401
    ctx.body = 'Пользователь с таким адресом электронной почты не найден!'
  }
  loadedUser = user

  const comparePassword = await bcrypt
    .compare(password, user.password) // сравнение паролей
    .catch((error) => {
      ctx.status = 500
      ctx.throw(`Ошибка поиска пользователя: ${error}`)
    }) // поиск пользователя по адресу электронной почты
  if (!comparePassword) {
    // если пароль не подходит
    ctx.status = 401
    ctx.throw('Ошибка проверки пароля!')
  } else {
    const token = jwt.sign({ username: loadedUser.username }, config.secret, {
      expiresIn: '20m',
    }) // создание токена
    ctx.status = 200
    ctx.body = { token } // отправка токена
  }
}

/*
 * Отправка данных JSON REST
 * @module getUser
 */
exports.getUser = (ctx, next) => {
  if (loadedUser) {
    ctx.status = 200
    ctx.body = {
      user: {
        id: loadedUser._id,
        username: loadedUser.fullname,
        email: loadedUser.email,
      },
    }
  } else {
    ctx.status = 401
    ctx.throw('Ошибка авториазции')
  }
}
