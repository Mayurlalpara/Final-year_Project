import express from 'express'
import { addfood, listfood, newcollection, removefood } from '../controllers/foodcontroller.js';
import multer from 'multer'

const foodRouter = express.Router();

//image storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addfood)

foodRouter.get("/list",listfood)

foodRouter.post("/remove",removefood)

foodRouter.get("/newcollection",newcollection)

export {foodRouter}