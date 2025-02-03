import userModel from "../models/usermodel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login user
const userLogin = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user =await userModel.findOne({email});
        if (!user) {
            return res.json({success:"false",msg:"User doesn't Exist"});
        }

        //hashing the user's password
        // const salt =await bcrypt.genSalt(10)
        // const hashpass = await bcrypt.hash(password,salt)

        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({success:"false",msg:"Incorrect Password!!",password:user.password,newpass:password})
        }

        const token = createToken(user._id);
        return res.json({success:true,token})
    } catch (error) {
        console.log(error);
        return res.json({success:false,msg:"error"});
        
    }

}

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const usereRegi = async (req,res)=>{

    const {name,email,password} = req.body;
    try {
        //checking user already exists
        const exists = await userModel.findOne({email});
        if (exists) {
           return res.json({success:false,msg:"User Already Exists"})
        }
        //validating email format and strong password
        if (!validator.isEmail(req.body.email)) {
            return res.json({ success: false, msg: "Please Enter a valid Email" });
        }
        
        //checking password strength
        if (password.length<8) {
           return res.json({success:false,msg:"please Enter the Strong  Password"})
        }
        //hashing the user's password
        const salt =await bcrypt.genSalt(10)
        const hashpass = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashpass
        })

        const user = await newUser.save()
        const token = createToken(user._id)
       return res.json({success:true,token})

    } catch (error) {
        console.log(error)
       return res.json({success:false,msg:"error"})
        
    }
}

const userList = async (req,res)=>{
try {
    const users = await userModel.find({})
    return res.json({success:true,data:users})
} catch (error) {
    console.log(error)
    return res.json({success:false,msg:"error"})
}
}

// Remove users from list
const removeuser = async (req, res) => {
    try {
      const { id } = req.body;
      if (!id) {
        return res.json({ success: false, msg: "User ID is required" });
      }
  
      const user = await userModel.findById(id);
      if (!user) {
        return res.json({ success: false, msg: "User not found" });
      }
  
      await userModel.findByIdAndDelete(id);
      res.json({ success: true, msg: "User removed successfully!" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, msg: "An error occurred while removing the user" });
    }
  };
  
export {userLogin,usereRegi,userList,removeuser}