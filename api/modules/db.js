const fs = require('fs') // модяль для работы с файловой системой
const mongoose = require('mongoose') // модуль для работы с БД
const clc = require('cli-color') // подсветка командной строки
const config = JSON.parse(fs.readFileSync(`config.json`).toString()) // получение настроек БД

mongoose.connect(`${config.db.host}/${config.db.nameDB}`, config.db.options) // установка соединения с БД
const db = mongoose.connection

db.on('error', err => {
  console.log(clc.red(`Произошла ошибка при работе с БД: ${err}`))
})

require('../models/mdl_user') // модуль "Пользователи"
require('../models/mdl_TypesOffers') // модель "Виды услуг"
require('../models/mdl_organization') // модель "Организация"
require('../models/mdl_products') // модель "Офферы"

module.exports = mongoose
