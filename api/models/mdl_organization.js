/*
 * Модель для работы с Организациями
 */

const mongoose = require('mongoose')
const { Schema } = mongoose

const OrganizationShema = new Schema(
  {
    name: {
      // наименование организации
      type: String,
      required: true,
    },
    description: {
      // описание организации
      type: String,
    },
    typeServices: [
      {
        // виды услуг
        type: Schema.Types.ObjectId,
        ref: 'TypeService',
        required: true
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Organization', OrganizationShema) // экспорт модели
