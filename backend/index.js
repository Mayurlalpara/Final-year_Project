import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import { foodRouter } from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import feedbackRouter from './routes/feedbackRoute.js';
import bodyParser  from 'body-parser';
import adminRouter from './routes/adminRoute.js';
// import searchRouter from './routes/searchRoute.js';




// app config
const app = express();
const port = 3000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

//database connection
connectDB();

//api endpoint 
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
// app.use("/api",searchRouter)
app.use("/api",feedbackRouter)
app.use("/api/admin",adminRouter)

app.get('/',(req,res)=>{
    res.send("working yesss")
})

app.listen(port,()=>{
    console.log("server at 3000 port!!")
})

