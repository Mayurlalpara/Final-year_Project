import express from 'express'
import authMid from '../middleware/auth.js'
import { listOrders, placeOrder,statusUpdate,userOrders,verifyOrder } from '../controllers/ordercontroller.js'

const orderRouter = express.Router();

orderRouter.post("/place",authMid,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMid,userOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",statusUpdate);



export default orderRouter;