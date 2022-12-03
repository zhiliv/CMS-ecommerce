import * as fs from 'fs' // модуль для работы с файловой системой
import * as path from 'path'

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
  ListDirectory = ListDirectory.map(path => `${path.replace(/\\/g, '/')}/*.vue`) // замена двойных слешей и добавление расширения файла
;(async function () {
  const result = [] // разультативный массив
  ListDirectory.forEach(async namePath => {
    const obj = {} // объект данных компонента
    let pathComponent = namePath.replace(startPath, '') // замена удаление из текста адреса компонента стартовой строки
    pathComponent = pathComponent.substr(1, pathComponent.length - 1) // удаление первого слэша
    pathComponent = pathComponent.replace(/\*.vue/g, '') // удаление префикса vue
    const arrPathComponent = pathComponent.split('/') // преобразование массива в текст разделенных делится слэшами
    let strComponentName = arrPathComponent.join('-') // получение строки из массива
    strComponentName = strComponentName.substr(0, strComponentName.length - 1) // удаляем символ тире в конце строки
    if (strComponentName) {
      pathComponent = namePath.replace(/\*.vue/g, `${arrPathComponent[arrPathComponent.length - 2]}.vue`) // замена *.vue на имя файла
      let data // переменная для хранения данных файлов
      if (fs.existsSync(pathComponent)) data = await fs.readFileSync(pathComponent).toString() // получение данных и преобразование в текст
      if (data) {
        let strProps = data.match(/props: {([^}]*)}/) // получение строки props
        if (strProps && strProps[0]) {
          // если данне найдены
          strProps = strProps[0].indexOf('validator') === -1 ?  `{${strProps[0]}}}` : `{${strProps[0]}}}}`
          let setQuote = strProps
            .replace(/([\$\w]+)\s*:/g, (_, $1) => '"' + $1 + '":') // обертка в кавычки ключа
            .replace(/: ([A-Za-z0-9]+)/g, (_, $1) => ': "' + $1 + '"') // обертка значения ключа в кавычки
            .replace(/''/g, '""') // замена одиночных кавычек на двойные
            .replace(/[\r\n ]+/g, '')

            const delComment = setQuote.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '') // удаление комментариев
            console.log('🚀 -> strProps=strProps[0].indexOf -> delComment', delComment)
            let arr = delComment.match(/"([\$\w]+)\s*":/g)
            if(arr.length){
              arr.forEach(el => {
                if(el !== 'props:'){
                  const regexp = `/validator(value)/`
                  const regex2 = new RegExp(`validator(value){([^}]*)}`, 'g');
                  console.log('🚀 -> regex2', regex2)
                  // console.log('🚀 -> regexp', regexp)
                  let t = delComment.match(regex2)
                  console.log(t)
                }

              })
            }
            // console.log('🚀 -> strProps=strProps[0].indexOf -> test', test)
            // const delValidator =
             //  onsole.log('🚀 -> setQuote', delComment.match(/validator\(value\){([^}]*)}/)) //! получение вылидации
          // console.log(/\/*/.test(setQuote))
        }
      }
    }

    //
  })
})()




