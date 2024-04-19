import { Router } from 'express'
import controller from '../controllers/basket.js'

const router = Router()

router.get('/getBasket/:userId', controller.getUserBasket)
router.post('/addItem', controller.addToBasket)
router.delete('/removeItem/:basketItemId', controller.removeFromBasket)
router.put('/increaseQuantity/:basketItemId', controller.increaseQuantity)
router.put('/decreaseQuantity/:basketItemId', controller.decreaseQuantity)

export default router
