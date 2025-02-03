import express from 'express'
import { getCart,addToCart,removeFromCart } from '../controllers/cartcontroller.js'
import authMid from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/add",authMid,addToCart)
cartRouter.post("/remove",authMid,removeFromCart)
cartRouter.post('/get',authMid,getCart)


export default cartRouter