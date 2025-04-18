import foodModel from '../models/foodmodels.js';
import fs from 'fs'


// add food item
const addfood = async (req,res)=>{

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({sccess:true,message:"food added done!!"})
    } catch (error) {
        console.log(error)
        res.json({sccess:false,msg:"Error"})
    }

}

//all food list
const listfood = async (req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({seccess:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({seccess:false,data:"error"})
    }
}

//remove food from list
const removefood = async (req,res)=>{
    try {
        const food  = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({seccess:true,msg:"yesss!!"})
    } catch (error) {
        console.log(error)
        res.json({seccess:false,msg:"error"})
    }
}

const newcollection = async(req,res)=>{
    try {
        const foods = await foodModel.find({});
        const newcollection = foods.slice(1).slice(-8);
        res.json({seccess:true,data:newcollection})
    } catch (error) {
        console.log(error);
        res.json({seccess:false,data:"error"})
    }

}

export {addfood,listfood,removefood,newcollection}