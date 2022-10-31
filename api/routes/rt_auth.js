const Router = require('koa-router')
const router = new Router({ prefix: '/auth' })
const authController = require('../controllers/ctrl_user')

router.post('/register', authController.createUser) // создание пользователя
router.post('/login', authController.signLogin) // авторизация пользователя
router.get('/user', authController.getUser) // получение данных пользователя



module.exports = router
