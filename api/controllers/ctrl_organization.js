/*
 * Модуль "Виды услуг"
 */

const organizationModel = require('../models/mdl_organization') // модуль для работы с таблицей Users

/*
 * Создание записи
 */
exports.create = async (ctx) => {
  const { params } = ctx.request.body // получение параметров
  try {
    // eslint-disable-next-line new-cap
    const newRow = new organizationModel(params) // создание объекта модели
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
    const result = await organizationModel.find(
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
    const result = await organizationModel.updateOne(
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
    const result = await organizationModel.deleteOne({ _id: params.id })
    ctx.status = 200
    ctx.body = result
  } catch (err) {
    ctx.status = 500
    ctx.throw(`Произошла ошибка: ${err}`)
  }
}
