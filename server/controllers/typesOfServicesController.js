/*
 * Модуль "Виды услуг"
 */

const typesServicesModel = require('../models/typesServicesModel') // модуль для работы с таблицей Users

/*
 * Создание записи
 */
exports.create = async (ctx) => {
  const { params } = ctx.request.body // получение параметров
  try {
    // eslint-disable-next-line new-cap
    const newRow = new typesServicesModel(params) // создание объекта модели
    const result = await newRow.save() // сохранение
    ctx.status = 200
    ctx.body = result
  } catch (err) {
    ctx.status = 500
    ctx.throw(`Произошла ошибка: ${err}`)
  }
}

/*
 * Получение всех записей
 */
exports.all = async (ctx) => {
  try {
    const result = await typesServicesModel.find(
      {},
      { name: true, description: true }
    ) // поиск всех записей
    console.log('🚀 -> exports.all= -> result', result)
    ctx.status = 200
    ctx.body = result
  } catch (err) {
    ctx.status = 500
    ctx.throw(`Произошла ошибка: ${err}`)
  }
}

/*
 * Редактирование строки
 */
exports.update = async (ctx) => {
  const { params } = ctx.request.body // входные параметры
  try {
    const result = await typesServicesModel.updateOne(
      { _id: params._id },
      params
    )
    ctx.status = 200
    ctx.body = result
  } catch (err) {
    ctx.status = 500
    ctx.throw(`Произошла ошибка: ${err}`)
  }
}

/*
 * Удаление строки
 */
exports.delete = async (ctx) => {
  const { params } = ctx // входные параметры
  try {
    const result = await typesServicesModel.deleteOne({ _id: params.id })
    ctx.status = 200
    ctx.body = result
  } catch (err) {
    ctx.status = 500
    ctx.throw(`Произошла ошибка: ${err}`)
  }
}
