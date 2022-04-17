/*
 * Модель БД для видов услуг
 */

const mongoose = require('mongoose') // модуль для работы с БД
const Schema = mongoose.Schema // создание схемы


const CitysSchema = new Schema({
  kladrCode: {
    // код кладр
    type: Number,
    required: true,
  },
  name: {
    // Наименование региона
    type: String,
    required: true,
  },
  shortclass: {
    // статус региона
    type: String,
  },
  urlName: {
    // наименование для url
    type: String,
  },
  imenitelny: {
    // именительный
    type: String,
  },
  roditelny: {
    // родительский падеж
    type: String,
  },
  datelny: {
    // дательный падеж
    type: String,
  },
  vinitelny: {
    // винительный падеж
    type: String,
  },
  tvoritelny: {
    // творительный падеж
    type: String,
  },
  predlozhny: {
    // предложный падеж
    type: String,
  },
  region: {type: Schema.Types.ObjectId, ref: 'Region'},

},
{strictPopulate: true})

module.exports = mongoose.model('City', CitysSchema)
