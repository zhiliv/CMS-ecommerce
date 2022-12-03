import * as fs from 'fs' // модуль для работы с файловой системой
import * as path from 'path'
import { globby } from 'globby'

const startPath = '../components' // путь для компонентов

/*
 * Получение адреса к файлу
 * @function flatten
 * @param {Array} lists - Список для получения адреса
 */
const flatten = lists => lists.reduce((a, b) => a.concat(b), [])

/*
 * Получение всех директорий по указанному пути
 * @function getDirectories
 * @param {String} srcpath - Путь для получения директрий
 */
const getDirectories = srcpath =>
  fs
    .readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory())

/*
 * Получение директорий рекурсивно
 * @function getDirectoriesRecursive
 * @param {String} srcpath - Путь для поиска
 */
const getDirectoriesRecursive = srcpath => [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))]

let ListDirectory = getDirectoriesRecursive(startPath)
if (ListDirectory && ListDirectory.length)
  ListDirectory = ListDirectory.map(path => `${path.replace(/\\/g, '/')}/*.json`) // замена двойных слешей и добавление расширения файла
;(async function () {
  const result = [] // разультативный массив
  ListDirectory.forEach(async namePath => {
    const paths = await globby(namePath) // получение всех файлов vue в папке
    if(paths.length){
      const data = await fs.readFileSync(paths[0]).toString()
      if(data){
        const dataComponent = JSON.parse(data)
        result.push(dataComponent)
      }

    }
  })
})()




