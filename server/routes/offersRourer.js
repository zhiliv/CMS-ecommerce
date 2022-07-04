/*
 * Роут для офферов
 */

const Router = require('koa-router')
const router = new Router({ prefix: '/api/offers' })
const controller = require('../controllers/offersController')

router.post('/', controller.create) // создание документа
router.get('/', controller.all) // получение всех документов
router.put('/', controller.update) // редактирование документа
router.delete('/:id', controller.delete) // удаление документа

module.exports = router
