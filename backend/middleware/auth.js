import jwt from 'jsonwebtoken'

const authMid = async (req,res,next)=>{
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,msg:"Not Authorized Login Again"})
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id
        next();
    } catch (error) {
        console.log(error);
        return res.json({success:false,msg:"error"})
        
    }
}


export default authMid