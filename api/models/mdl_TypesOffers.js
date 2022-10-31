/*
 * Модель БД для типов офферов
 */

const mongoose = require('mongoose') // модуль для работы с БД
const Schema = mongoose.Schema // создание схемы

const TypesOffersSchema = new Schema(
  {
    /* наименование видов услуг */
    name: {
      type: String,
      required: true,
    },
    /* описание вида услуг */
    description: {
      type: String,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('type-offers', TypesOffersSchema)
