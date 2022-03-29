const mongoose = require('mongoose'), //модуль для работы с БД
  fs = require('fs'), //модяль для работы с файловой системой
  clc = require('cli-color'), //подсветка командной строки
  config = JSON.parse(fs.readFileSync(`./config.json`).toString()) //получение настроек БД

mongoose.connect(`${config.db.host}/${config.db.nameDB}`, config.db.options) //установка соединения с БД
const db = mongoose.connection

db.on('error', (err) => {
  console.log(clc.red(`Произошла ошибка при работе с БД: ${err}`))
})

require('./../models/userModel') //модуль для работы с пользователями

module.exports = mongoose
