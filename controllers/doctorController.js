import doctorModel from "../models/doctorModel.js"


const doctorList = async (req, res) => {

    try {

        const doctors = await doctorModel.find({}).select(["-password,-email"]);
        res.json({ success: true, doctors })
    } catch (e) {
        console.log(e);
        res.json({ success: false, message: "Server error ", e })

    }


}

export default doctorList