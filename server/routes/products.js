import { Router } from 'express'
import controller from '../controllers/products.js'

const router = Router()

router.post('/', controller.createItem)
router.get('/', controller.getAllItems)
router.get('/:id', controller.getItemId)

export default router
