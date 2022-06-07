/* eslint-disable no-unused-vars */
/*
 * Удаление пробелов
 * @function removeSpace
 * @param {String} string Строка, в которой необходимо удалить пробелы
 * @return {String} Строка без пробелов
 */
export const removeSpace = (string) => (string ? string.replace(/ /g, '') : '')

/*
 * Преобразование текста из формата camelCase в формат dash case
 * @function camelToDash
 * @param {String} text Преобразовываемое значение
 */
export const camelToDash = (text) => {
  return text.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())
}
