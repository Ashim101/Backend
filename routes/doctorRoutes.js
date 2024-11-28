import { Router } from "express";
import { doctorLogin, doctorList, allAppointments, cancelAppointment, finishAppointment } from "../controllers/doctorController.js";
import doctorAuth from "../middlewares/doctorauth.js";

const doctorRouter = Router()

doctorRouter.get("/list", doctorList)
doctorRouter.post("/login", doctorLogin)
doctorRouter.get("/all-appointments", doctorAuth, allAppointments)
doctorRouter.patch("/cancel-appointment", doctorAuth, cancelAppointment)
doctorRouter.patch("/finish-appointment", doctorAuth, finishAppointment)


export default doctorRouter