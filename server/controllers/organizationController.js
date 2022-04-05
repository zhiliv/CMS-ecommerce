/*
 * Модель БД для организаций
 */

const mongoose = require('mongoose') // модуль для работы с БД
const Schema = mongoose.Schema // создание схемы
// const TypesServices = require('./typesServicesController')

const OrganizationSchema = new Schema(
  {
    name: {
      // наименование оффера
      type: String,
      required: true,
    },
    typeService: {
      name: String,
      postedBy: { type: mongoose.Schema.Types.ObjectId, reg: 'TypesServices' },
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Organization', OrganizationSchema)
