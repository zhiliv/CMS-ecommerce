/* eslint-disable no-unused-vars */
/*
 * Удаление пробелов
 * @function removeSpace
 * @param {String} string Строка, в которой необходимо удалить пробелы
 * @return {String} Строка без пробелов
 */
export const removeSpace = string => (isString(string) ? (string ? string.replace(/ /g, '') : '') : string)

/*
 * Преобразование текста из формата camelCase в формат dash case
 * @function camelToDash
 * @param {String} text Преобразовываемое значение
 */
export const camelToDash = text => {
  return isString(text) ? text.replace(/[A-Z]/g, m => '-' + m.toLowerCase()) : text
}

/*
 * Проверка является ли значение логическим типом
 * @function isBoolean
 * @param {Any} data Проверяемое значение
 * @return {Boolean} Результат проверки
 */
export const isBoolean = data => typeof data === 'boolean'

/*
 * Проверка является ли значение строкой
 * @function isString
 * @param {Any} data Проверяемое значение
 * @return {Boolean} Результат проверки
 */
export const isString = data => typeof data === 'string'

/*
 * Проверка, является ли значение числом
 * @function isNumber
 * @param {Any} data Проверяемое значение
 * @return {Boolean} Результат проверки
 */
export const isNumber = data => Number.isInteger(+data)

/*
 * Преобразование строки в логический тип
 * @function  strToBool
 * @param {String} data - Значение, которое необходимо преобразовать в логический тип
 */
export const strToBool = data => {
  if (data === 'true' && isString(data)) return true
  else if (data === 'false' && isString(data)) return false
  else return data
}

/*
 * Преобразование строки в массив
 * @function strToArr
 * @param {String} data - Строка для преобразования
 */
export const strToArr = data => (data ? data.trim().split(' ') : [])

/*
 * Добавление и удаление классов при наведении
 * @function hoverActive
 * @param {Object} element - элемент dom, которому необходимо добавить\удалить классы
 * @param {String} classes - классы, добавляемые \ удаляемые
 */
export const addStringListClass = (element, classes) => {
  const arrClass = strToArr(classes)
  arrClass.forEach(cls => {
    element.classList.toggle(cls)
  })
}

/*
 * Клонирование объекта
 * @function cloneObject
 * @param {Object} obj - Объект для клонирования
 */
export const cloneObject = obj => Object.assign({}, obj)

/*
 * Проверка пустоты объекта
 * Возвращает true если объект пустой
 * @function checkEmptyObject
 * @param {Object} obj - Проверяемый объект
 */
export const checkEmptyObject = obj => {
  // eslint-disable-next-line no-unreachable-loop
  if (obj && typeof obj1 === 'object') for(const key in obj) return false
  return true
}

/*
* Сравнение объектов
* Если объекты равны то значение true
* @function withObject
* @param {Object} obj1 - Первый объект для сравнения
* @param {Object} obj2 - Второй объект для сравнения
*/
export const withObject = (obj1, obj2) => (obj1 && obj2) && (checkObject(obj1) && checkObject(obj2)) ? JSON.stringify(obj1) === JSON.stringify(obj2) : false

/*
* Проверка что параметр - объект
* @function checkObject
* @param {Any} obj - Проверяемые данные
*/
export const  checkObject = obj => typeof obj === 'object'