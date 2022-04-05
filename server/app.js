'use strict'

const fs = require('fs') // модуль для работы с файловой системой
const Koa = require('koa') // подключение koa сервера
const bodyParser = require('koa-bodyparser') // парсер параметров адресной строки
const koaBody = require('koa-body') // модуль для получение параметров post
const cors = require('@koa/cors') // подключение cors чтобы можно было делать запросы со сторонних ресурсов
const moment = require('moment') // библиотека для работы с датой и временем
const clc = require('cli-color') // цветовая подсветка в консоли
const nodemailer = require('nodemailer') // модуль для работы с электронной почтой
const session = require('koa-session') // модуль для генерации паролей'
const jwt = require('koa-jwt') // модуль jwt для авторизации
const bcrypt = require('bcryptjs') // модуль для шифрования
const Router = require('koa-router') // подключение маршрутизации
const app = (module.exports = new Koa()) // создание сервера
const router = new Router() // создание маршрутизации
const userModel = require('./models/userModel') // модуль для работы с таблицей Users

/*
 * Проверка количества записей в коллекции "User"
 * Если пользователей нет, добавляем пользователя admin / 1
 */
// eslint-disable-next-line node/handle-callback-err
userModel.count({}).exec(async (err, count) => {
  if (!count) {
    const hashedPassword = await bcrypt.hashSync('1', 12)
    const user = new userModel({
      username: 'admin',
      email: 'zhiliv@gmail.com',
      password: hashedPassword,
    }) // формирование объекта пользователя
    await user.save() // сохранение данных пользователя
  }
})

const config = JSON.parse(fs.readFileSync('./config.json').toString()) // получение конфигурации сервера

// require('./routes/authRouter')

app.use(cors()) // установка cors для сервера
app.use(bodyParser({ strict: false })) // установка парсера параметров для сервера

app.use(router.routes())
app.use(router.allowedMethods())

require('./modules/db')
require('./routes/index')(app)

app.use(jwt({ secret: config.secter })) // установка секретного ключа для jwt
app.use((ctx, next) => {
  console.log('🚀 -> app.use -> ctx', ctx)
  return next().catch((err) => {
    if (err.status == 401) {
      ctx.status = 401
      ctx.body = 'Protected resource, use Authorization header to get access\n'
    } else {
      throw err
    }
  })
})

// Unprotected middleware
app.use((ctx, next) => {
  if (ctx.url.match(/^\/public/)) {
    ctx.body = 'unprotected\n'
  } else {
    return next()
  }
})
// Protected middleware
app.use((ctx) => {
  if (ctx.url.match(/^\/api/)) {
    ctx.body = 'protected\n'
  }
})

app.use((ctx) => {
  ctx.body = { status: 'OK' }
})

/********************
 **  Запуск сервера *
 ********************/
// запуск сервера
app.listen(config.port, () => {
  // вывод сообщения о запуске сервера
  console.log(`Сервер запущен на порту ${config.port}`)
})
