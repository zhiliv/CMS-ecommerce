/*
 * Модель БД для видов услуг
 */

const mongoose = require('mongoose') // модуль для работы с БД
const {Schema} = mongoose // создание схемы

const RegionsSchema = new Schema(
  {
    kladrCode: {
      // код кладр
      type: Number,
      required: true,
    },
    name: { // Наименование региона
      type: String,
      required: true
    },
    statusRegin: { // статус региона
      type: String
    },
    urlName: { // наименование для url
      type: String
    },
    sklonenie: { // склонение в дательном падеже
      type: String
    },
    stories: [{ type: Schema.Types.ObjectId, ref: 'City' }]
  }
)

module.exports = mongoose.model('Region', RegionsSchema)
