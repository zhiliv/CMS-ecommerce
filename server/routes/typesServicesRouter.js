const Router = require('koa-router')
const router = new Router({ prefix: '/api' })
const controller = require('../controllers/TypesOfServicesController')

router.post('/new_type_service', controller.create) // создание пользователя




module.exports = router
