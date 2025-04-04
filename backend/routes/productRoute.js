import express from 'express'
import { addProduct, removeProducts, singleProduct, listProducts } from '../controller/productController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/admin.js'

const productRouter = express.Router()

productRouter.post('/add', authAdmin, upload.fields([{ name: 'image1', maxCount: 2 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), addProduct)

productRouter.post('/single', singleProduct)
productRouter.post('/remove', authAdmin, removeProducts)


productRouter.get('/list', listProducts)



export default productRouter