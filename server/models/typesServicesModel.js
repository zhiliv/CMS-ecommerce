/*
 * Модель БД для видов услуг
 */

const mongoose = require('mongoose') // модуль для работы с БД
const Schema = mongoose.Schema // создание схемы

const TypesOfServicesSchema = new Schema(
  {
    name: {
      // наименование видов услуг
      type: String,
      required: true,
    },
    description: { // описание вида услуг
      type: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('TypeService', TypesOfServicesSchema)
