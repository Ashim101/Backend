const addDoctor = async (req, res) => {
    try {
        const {
            name, email, speciality, degree, experience,
            about, available, fees, address, date
        } = req.body;

        console.log(req.body, req.file)

        return res.status(200).send("okay")


        // Check if required fields are present
        // if (!name || !email || !speciality || !degree || !experience || !about || available === undefined || !fees || !address || !date) {
        //     return res.status(400).json({ message: "All fields are required" });
        // }

        // Check if doctor with the same email already exists
        // const existingDoctor = await doctorModel.findOne({ email });
        // if (existingDoctor) {
        //     return res.status(400).json({ message: "Doctor with this email already exists" });
        // }

        // // Create a new doctor
        // const newDoctor = new doctorModel({
        //     name,
        //     email,
        //     image,
        //     speciality,
        //     degree,
        //     experience,
        //     about,
        //     available,
        //     fees,
        //     address,
        //     date
        // });

        // // Save the new doctor to the database
        // await newDoctor.save();

        // res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });

        console.log(req.body, imageFile)
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

export { addDoctor };