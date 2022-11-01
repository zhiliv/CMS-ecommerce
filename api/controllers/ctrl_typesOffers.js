/* eslint-disable camelcase */
/* eslint-disable new-cap */
/*
 * Модуль "Виды услуг"
 */

const mdl_TypesOffers = require('../models/mdl_TypesOffers') // модуль для работы с таблицей Users

/*
 * Создание записи
 */
exports.create = async ctx => {
  const { params } = ctx.request.body // получение параметров

  /*
   * Получение списка всех записей с приведенным свойством name в верхний регистр
   * @function checkDouble
   */
  const checkDouble = async () => {
    const list = await mdl_TypesOffers.find() // получение всех элементов
    console.log('params.name.toUpperCase()', params.name.toUpperCase())
    return list && list.length ? list.findIndex(el => el.name.toUpperCase() === params.name.toUpperCase()) : -1
  }
  try {
    if ((await checkDouble()) === -1) {
      // проверка что такого элемента нет
      // проверка на то что записи с таким наименованием не существует
      const newRow = new mdl_TypesOffers(params) // создание объекта модели
      const result = await newRow.save() // сохранение
      ctx.status = 200 // установка статуса
      ctx.body = {
        result,
        title: 'Тип оффера добавлен успешно',
        message: 'Запись добавлена успешно!',
        type_message: 'success',
      } // передача полученного результата сохранения записи
    } else {
      ctx.status = 200 // установка статуса
      ctx.body = { title: 'Внимание!', message: 'Запись с таким наименованием уже существует', type_message: 'warning' } // отправка сообщения
    }
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500 // установка статуса в случае ошибки
    ctx.body = { title: 'Ошибка', message: err.message, type_message: 'error' } // отправка сообщения об ошибке
  }
}

/*
 * Получение всех записей
 */
exports.all = async ctx => {
  try {
    const result = await mdl_TypesOffers.find() // поиск всех записей
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
exports.update = async ctx => {
  const { params } = ctx.request.body // входные параметры
  try {
    const result = await mdl_TypesOffers.updateOne({ _id: params._id }, params)
    console.log('🚀 -> result', result)
    ctx.status = 200
    ctx.body = { result, title: 'Удаление завершено', message: 'Тип оффера удален успешно!', type_message: 'info' }
  } catch (err) {
    ctx.status = 500
    ctx.throw(`Произошла ошибка: ${err}`)
  }
}

/*
 * Удаление строки
 */
exports.delete = async ctx => {
  const { params } = ctx // входные параметры
  try {
    const result = await mdl_TypesOffers.deleteOne({ _id: params.id })
    ctx.status = 200 // установка статуса
    ctx.body = { result, title: 'Удаление завершено', message: 'Тип оффера удален успешно!', type_message: 'info' }
  } catch (err) {
    ctx.status = 500
    ctx.throw(`Произошла ошибка: ${err}`)
  }
}
