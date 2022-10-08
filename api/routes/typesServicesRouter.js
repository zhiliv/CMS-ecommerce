const Router = require('koa-router')
const router = new Router({ prefix: '/api/type_service' })
const controller = require('../controllers/TypesOfServicesController')

router.post('/', controller.create) // создание вида услуг
router.get('/', controller.all) // получение всех видов услуг
router.put('/', controller.update) // редактирование видов услуг
router.delete('/:id', controller.delete) // удаление вида услуг



module.exports = router
