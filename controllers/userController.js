
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

const getProfile = async (req, res) => {
    const { id } = req.body
    try {

        const userData = await userModel.findById(id).select("-password")
        if (userData) {
            res.json({ userData })
        }
    } catch (e) {
        console.error("Error during login:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }

}

const updateProfile = async (req, res) => {
    const { name, dob, phone, address, id } = req.body;
    const imageFile = req.file; // Image file from request

    // Log the request body and file
    console.log("Request Body:", req.body);
    console.log("Image File:", imageFile);

    // Check if required fields are present
    if (!name || !dob || !phone || !address || !id) {
        console.log("Missing fields:", { name, dob, phone, address, id });
        return res.json({ success: false, message: "All fields are required" });
    }

    try {
        // Log before initializing updated data
        console.log("Initializing updatedData with basic fields");

        // Initialize an update object with the basic fields
        const updatedData = {
            name,
            dob,
            phone,
            address: JSON.parse(address) // Parse the address as it's sent as a string
        };

        // Log the parsed updated data
        console.log("Updated Data:", updatedData);

        // If there's an image file, upload to Cloudinary and add to updatedData
        if (imageFile) {
            console.log("Uploading image to Cloudinary...");
            const uploadedImage = await cloudinary.uploader.upload(imageFile.path); // Assuming the image is sent in `req.file`

            // Log the uploaded image URL
            console.log("Uploaded Image URL:", uploadedImage.secure_url);

            updatedData.image = uploadedImage.secure_url; // Save the uploaded image URL
        }

        // Log before updating the user
        console.log("Finding and updating user with ID:", id);

        // Find the user by ID and update their profile
        const user = await userModel.findByIdAndUpdate(id, updatedData, { new: true }); // `new: true` returns the updated document

        if (!user) {
            console.log("User not found for ID:", id);
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Log successful update
        console.log("Profile updated successfully:", user);

        // Successfully updated the profile
        res.json({ success: true, message: "Profile updated successfully", user });

    } catch (error) {
        // Log any error that occurs
        console.error("Error during profile update:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};



export { userLogin, registerUser, getProfile, updateProfile };