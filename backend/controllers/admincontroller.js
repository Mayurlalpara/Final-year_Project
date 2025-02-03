import adminModel from "../models/adminmodel.js";
import jwt from "jsonwebtoken";

const adminLogin = async (req, res) => {
    const { name, password } = req.body;

    try {
        // Check if the admin exists
        let admin = await adminModel.findOne({ name, password });
        if (!admin) {
            return res.status(400).json({ success: false, msg: "Admin does not exist" });
        }

        // Set loggedIn status of all other admins to false
        await adminModel.updateMany({}, { loggedIn: false });

        // Update the loggedIn status of the current admin
        admin.loggedIn = true;
        await admin.save();

        // Generate a token
        const token = jwt.sign({ admin: { id: admin._id } }, process.env.JWT_SECRET);

        return res.json({ success: true, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: "An error occurred" });
    }
};

export { adminLogin };
