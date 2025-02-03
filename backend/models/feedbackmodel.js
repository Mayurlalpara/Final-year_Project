import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
    name:{type:String,required:false},
    email:{type:String, required:true},
    feedback:{type:String,required:true}
});

const feedbackModel = mongoose.model.feedback || mongoose.model('feedback', FeedbackSchema);

export default feedbackModel;