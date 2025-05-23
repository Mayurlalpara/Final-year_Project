import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "food", required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        category: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Food Processing" },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false },
  });
  
  const orderModel = mongoose.model.order || mongoose.model("Order", OrderSchema);
  
  export default orderModel;
  