const fs = require('fs') // модяль для работы с файловой системой
const mongoose = require('mongoose') // модуль для работы с БД
const clc = require('cli-color') // подсветка командной строки
const config = JSON.parse(fs.readFileSync(`~/config.json`).toString()) // получение настроек БД

mongoose.connect(`${config.db.host}/${config.db.nameDB}`, config.db.options) // установка соединения с БД
const db = mongoose.connection

db.on('error', (err) => {
  console.log(clc.red(`Произошла ошибка при работе с БД: ${err}`))
})


const sourceRegion = JSON.parse(
  fs.readFileSync('./source/regions.json').toString()
) // получение всех регионов

const sourceCitys = JSON.parse(
  fs.readFileSync('./source/citys.json').toString()
) // получение всех регионов
const regionsModel = require('./source/regionsModel')
const citysModel = require('./source/citysModel')

const startRegions = new Promise((resolve, reject) => {
  sourceRegion.forEach(async (region, index) => {
    const find = await regionsModel
      .findOne({ kladrCode: +region.kladr_code })
      .exec()
    if (!find || !find.length) {
      // eslint-disable-next-line new-cap
      new regionsModel({
        kladrCode: +region.kladr_code,
        name: region.name,
        statusRegion: region.status,
        urlName: region.name_url,
        sklonenie: region.sklon,
      }).save() // создание объекта модели
    }
    if (index === sourceRegion.length - 1) resolve()
  })
})

startRegions.then(() => {
  sourceCitys.forEach(async (city) => {
    const find = await citysModel
      .find({ kladrCode: +city.city_kladr_code })
      .exec()
    if (!find || !find.length) {
      const region = await regionsModel
        .findOne({ kladrCode: +city.region_kladr_code })
        .exec()
      // eslint-disable-next-line new-cap
      await new citysModel({
        kladrCode: +city.city_kladr_code,
        name: city.name,
        shortclass: city.shortclass,
        urlName: city.name_url,
        imenitelny: city.im,
        roditelny: city.rod,
        datelny: city.dat,
        vinitelny: city.vin,
        tvoritelny: city.tvor,
        predlozhny: city.predl,
        region: region._id
      }).save()
    }
  })
})
/* console.log(mongoose.modelNames())
  citysModel.findOne({_id: '625c4587930b844cd339bd03'}).populate('region').then(res => {
  console.log('🚀 -> test -> res', res)

  })
}) */



module.exports = mongoose
