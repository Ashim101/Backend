import { Router } from "express";
import { getProfile, registerUser, updateProfile, userLogin } from "../controllers/userController.js";
import upload from "../middlewares/multer.js";
import userAuth from "../middlewares/userAuth.js";


const userRoute = Router()


userRoute.post("/register", registerUser)
userRoute.post("/login", userLogin)
userRoute.get("/profile", userAuth, getProfile)
userRoute.patch("/update-profile", upload.single("image"), userAuth, updateProfile)

export default userRoute