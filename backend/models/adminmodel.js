import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true, 
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    loggedIn: {
        type: Boolean,
        default: false,
    },
});

const adminModel = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default adminModel;
