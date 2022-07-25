const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Products = new Schema(
  {
    name: {
      // наименование продукта
      type: String,
      required: true,
    },
    idCategory: {
      // идентификатор категории
      type: String,
      required: true,
    },
    description: {
      // описание продукта
      type: String,
      required: false,
    },
    shortDescription: {
      // короткое описание продукта
      type: String,
      required: false,
    },
    banners: {
      // Список изображений
      type: Array,
      required: false,
    },
    sumStart: {
      // минимальная сумма
      type: Number,
      required: false,
    },
    sumEnd: {
      // максимальная сумма
      type: Number,
      required: false,
    },
    freePeriod: {
      // беспроцентный период(дней)
      type: Number,
      required: false,
    },
    status: {
      // состояние продукта(активен\неактивен)
      type: Boolean,
      required: false,
    },
    srokStart: {
      // минимальный срок(Дней)
      type: Number,
      required: false,
    },
    srokEnd: {
      // максимальный срок(Дней)
      type: Number,
      required: false,
    },
    timeForConsideration: {
      // время рассмотрения заявки(в часах)
      type: Number,
      required: false,
    },
    ageStart: {
      // минимальный возраст
      type: Number,
      required: false,
    },
    ageEnd: {
      // максимальный возраст
      type: Number,
      required: false,
    },
    percentStart: {
      // минимальная процентная ставка
      type: Number,
      required: false,
    },
    typePercentStart: {
      // Тип процентной минимальной ставки
      type: Number,
      required: false,
    },
    percentEnd: {
      // максимальная процентная ставка
      type: Number,
      required: false,
    },
    typePercentEnd: {
      // Тип процентной максимальной ставки
      type: Number,
      required: false,
    },
    cpa: {
      // партнерская программа
      type: String,
      required: false,
    },
    urlRef: {
      // ссылка для перехода на оффер
      type: String,
      required: false,
    },
    urlCpa: {
      // ссылка на оффер в партнерской программе
      type: String,
      required: false,
    },
    profit: {
      // Доходность
      type: Number,
      required: false,
    },
    typeProfit: {
      // тип доходности
      type: String,
      required: false,
    },
    phone: {
      // номер телефона
      type: String,
      value: false,
    },
    site: {
      // адрес сайта
      type: String,
      required: false,
    },
    organization: {
      // наименование организации
      type: String,
      required: false,
    },
    sale: {
      // акция
      type: Boolean,
      required: false,
    },
    cr: {
      // 'Количество уникальных конверсий / Количество уникальных кликов на баннеры',
      type: Number,
      required: false,
    },
    ar: {
      // 'процент одобрения'
      type: Number,
      required: false,
    },
    epc: {
      //  'средний заработок в пересчете на один уникальный клик'
      type: Number,
      required: false,
    },
    dateStatistics: {
      // дата обновления статистики
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Products', Products)
