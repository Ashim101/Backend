import validator from 'validator'
import { v2 as cloudinary } from 'cloudinary'
import jwt from 'jsonwebtoken'

import doctorModel from '../models/doctorModel.js';
import bcrypt from 'bcrypt'
import { json } from 'express';
const addDoctor = async (req, res) => {
    try {
        const {
            name, email, speciality, degree, experience,
            about, available, fees, address, password
        } = req.body;




        if (!name || !email || !speciality || !degree || !experience || !about || available === undefined || !fees || !address || !password) {
            return res.status(400).json({ success: true, message: "All fields are required" });
        }


        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });


        }
        if (!validator.isStrongPassword(password)) {

            return res.status(400).json({ success: false, message: "Please enter a strong password" });


        }

        const existingDoctor = await doctorModel.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ success: false, message: "Doctor with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //uplad image to cloudinary
        const imgfile = req.file




        const img = await cloudinary.uploader.upload(imgfile.path)


        // Create a new doctor
        const newDoctor = new doctorModel({
            name,
            email,
            image: img.secure_url,
            speciality,
            degree,
            experience,
            about,
            available,
            password: hashedPassword,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        });

        // Save the new doctor to the database
        await newDoctor.save();

        return res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};


const adminLogin = (req, res) => {

    console.log(req.body)
    const { email, password } = req.body

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ email, password }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h',
        });
        return res.json({ token })

    }
    else {
        return res.json({ success: false, msg: "Error occured" })
    }


}

export { addDoctor, adminLogin };