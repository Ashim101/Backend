import { Router } from "express";
import { doctorLogin, doctorList } from "../controllers/doctorController.js";

const doctorRouter = Router()

doctorRouter.get("/list", doctorList)
doctorRouter.post("/login", doctorLogin)



export default doctorRouter