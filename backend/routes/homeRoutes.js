import express from 'express'
const router = express.Router()
import { getProducts } from '../controllers/homeController.js'


router.route('/').get(getProducts)

export default router