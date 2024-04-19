import { Router } from 'express'
import controller from '../controllers/auth.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = Router()

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/me', checkAuth, controller.getMe)

export default router
