import express from 'express'
import upload from '../middlewares/multer.js'
import { addDoctor, adminLogin, allDoctors } from '../controllers/adminController.js'
import adminAuth from '../middlewares/adminauth.js'


const adminRouter = express.Router()


adminRouter.post('/add-doctor', adminAuth, upload.single('image'), addDoctor)
adminRouter.post('/login', adminLogin)
adminRouter.get('/all-doctors', adminAuth, allDoctors)





export default adminRouter