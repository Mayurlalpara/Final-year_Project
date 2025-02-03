import orderModel from "../models/orderModel.js";
import userModel from "../models/usermodel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const url = "http://localhost:5173";

// Placing user order in frontend
const placeOrder = async (req, res) => {
  try {
   // console.log("Request body:", req.body);  Log the incoming request data

    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Corrected typo
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "delivery charges",
        },
        unit_amount: 49 * 100, // Delivery charges
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${url}/verify?success=false&orderId=${newOrder._id}`,
    });
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    //console.error("Error placing order:", error);  Log the error
    res.json({ success: false, msg: "An error occurred while placing the order. Please try again." });
  }
}
 
const verifyOrder = async (req,res)=>{
  const {orderId,success} =req.body;
  try {
    if (success==="true") {
      await orderModel.findByIdAndUpdate(orderId,{payment:true});
      return res.json({success:true,msg:"paid"})
    }
    else{
      await orderModel.findByIdAndDelete(orderId);
      return res.json({success:false,msg:"not paid"})
    }
  } catch (error) {
    console.log(error);
    return res.json({success:false,msg:"error"})
  }
}
// User orders for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.json({ success: false, msg: "User ID is required" });
    }

    const orders = await orderModel.find({ userId });
    return res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, msg: "An error occurred while fetching orders" });
  }
};

//order list for admin
const  listOrders = async (req,res)=>{
  try {
    const orders = await orderModel.find({})
    return res.json({success:true,data:orders})
  } catch (error) {
    console.log(error);
    return res.json({success:false,msg:"error"})
    
  }
}

// For updating the status in admin
const statusUpdate = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    if (!orderId || !status) {
      return res.json({ success: false, msg: "Order ID and status are required" });
    }

    await orderModel.findByIdAndUpdate(orderId, { status });
    return res.json({ success: true, msg: "Status updated successfully!" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, msg: "An error occurred while updating the status" });
  }
};




export { placeOrder,verifyOrder,userOrders,listOrders,statusUpdate };
