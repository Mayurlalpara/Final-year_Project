import feedbackModel from "../models/feedbackmodel.js";

const feedBack = async (req, res) => {
    const { name, email, feedback } = req.body;

    try {
        if (email) {
            const newFeedback = new feedbackModel({
                name: name,
                email: email,
                feedback: feedback
            });

            await newFeedback.save();

            res.json({ success: true, msg: "Feedback submitted successfully!" });
        } else {
            res.json({ success: false, msg: "Email is required" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "An error occurred while submitting feedback" });
    }
};


//show feedback to admin

const getFeedback = async(req,res)=>{
    const {name,email,feedback} = req.body;
    try {
        const feedbacks = await feedbackModel.find({})
        res.json({success:true,data:feedbacks})  
    } catch (error) {
        console.log(error);
        res.json({success:false,msg:"error"})
        
    }
}

//remove feedback from list

const removeFeedback = async (req, res) => {
    const { id } = req.body;
    try {
        const feedback = await feedbackModel.findById(id);
        if (!feedback) {
            return res.json({ success: false, msg: "Feedback not found" });
        }
        await feedbackModel.findByIdAndDelete(id);
        res.json({ success: true, msg: "Deleted successfully!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Error occurred" });
    }
};


export {feedBack,getFeedback,removeFeedback}