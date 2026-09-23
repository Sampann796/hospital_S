import jwt from 'jsonwebtoken';
import DoctorSchema from "../models/DoctorSchema.js";
import UserSchema from "../models/UserSchema.js";
     

export const authenticate = async(req, res, next) => {

    // get token from headers 

    const authToken = req.headers.authorization

    //check token is exists 
    if(!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({success : false , message : 'NO Token, authorization denied'})
    }

    try{
        const token = authToken.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.id
        req.role = decoded.role 

        next(); // MUST be called the next fucntion
    } catch(err){
        if (err.name === 'TokenExpiredError'){
            return res.status(401).json({message: "Token expired"})
        }
        retrun res.status(401).json({success : false , message : 'Invalid token'})
    }
}