import express from 'express'
import { removeuser, userList, userLogin,usereRegi } from '../controllers/usercontroller.js'


const userRouter = express.Router()

userRouter.post("/register",usereRegi);
userRouter.post("/login",userLogin);
userRouter.get("/list",userList);
userRouter.post("/remove",removeuser);

export default userRouter