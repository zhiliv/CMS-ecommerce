/* eslint-disable no-unused-vars */
/*
 * Удаление пробелов
 * @function removeSpace
 * @param {String} string Строка, в которой необходимо удалить пробелы
 * @return {String} Строка без пробелов
 */
export const removeSpace = (string) =>
  isString(string) ? (string ? string.replace(/ /g, '') : '') : string

/*
 * Преобразование текста из формата camelCase в формат dash case
 * @function camelToDash
 * @param {String} text Преобразовываемое значение
 */
export const camelToDash = (text) => {
  return isString(text)
    ? text.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
    : text
}

/*
 * Проверка является ли значение логическим типом
 * @function isBoolean
 * @param {Any} data Проверяемое значение
 * @return {Boolean} Результат проверки
 */
export const isBoolean = (data) => typeof data === 'boolean'

/*
 * Проверка является ли значение строкой
 * @function isString
 * @param {Any} data Проверяемое значение
 * @return {Boolean} Результат проверки
 */
export const isString = (data) => typeof data === 'string'

/*
 * Преобразование строки в логический тип
 * @function  strToBool
 * @param {String} data - Значение, которое необходимо преобразовать в логический тип
 */
export const strToBool = (data) => {
  if (data === 'true' && isString(data)) return true
  else if (data === 'false' && isString(data)) return false
  else return data
}

/*
 * Преобразование строки в массив
 * @function strToArr
 * @param {String} data - Строка для преобразования
 */
export const strToArr = (data) => (data ? data.trim().split(' ') : [])
