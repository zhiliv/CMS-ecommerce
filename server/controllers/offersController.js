/*
 * Модуль "Виды услуг"
 */

const offersModel = require('../models/offersModel') // модуль для работы с таблицей Users

/*
 * Создание записи
 */
exports.create = async (ctx) => {
  const { params } = ctx.request.body // получение параметров
  try {
    // eslint-disable-next-line new-cap
    const newRow = new offersModel(params) // создание объекта модели
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
    const result = await offersModel.find(
      {},
      { name: true, description: true }
    ) // поиск всех записей
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
    const result = await offersModel.updateOne(
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
    const result = await offersModel.deleteOne({ _id: params.id })
    ctx.status = 200
    ctx.body = result
  } catch (err) {
    ctx.status = 500
    ctx.throw(`Произошла ошибка: ${err}`)
  }
}
