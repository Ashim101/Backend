
import validator from 'validator'
import { v2 as cloudinary } from 'cloudinary'
import jwt from 'jsonwebtoken'

import bcrypt from 'bcrypt'
import { json } from 'express';
import userModel from '../models/userModel.js';
const registerUser = async (req, res) => {
    try {
        const {
            name, email, password
        } = req.body;




        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }


        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });


        }
        if (!validator.isStrongPassword(password)) {

            return res.status(400).json({ success: false, message: "Please enter a strong password" });


        }

        const existingDoctor = await userModel.findOne({ email });
        if (existingDoctor) {
            return res.json({ success: false, message: "User with this email already exists" });

        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //uplad image to cloudinary
        // const imgfile = req.file




        // const img = await cloudinary.uploader.upload(imgfile.path)


        // Create a new doctor
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,

        });

        // Save the new doctor to the database
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h',
        })

        return res.status(201).json({ success: true, message: "User added successfully", token });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};



const userLogin = async (req, res) => {
    try {


        const { email, password } = req.body;

        // Find user by email (await is necessary since it's asynchronous)
        const user = await userModel.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        // Compare the plain text password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // If the passwords match, generate a JWT
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
                expiresIn: '1h',
            });
            return res.json({ success: true, token });
        } else {
            return res.json({ success: false, msg: "Credentials do not match" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};



export { userLogin, registerUser };