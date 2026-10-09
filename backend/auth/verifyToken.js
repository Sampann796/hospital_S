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
        return res.status(401).json({success : false , message : 'Invalid token'})
    }
}

export const restrict = roles => async(req, res, next) => {
    const userId = req.userId 

    let user;

    const patient = await UserSchema.findById(userId)
    const doctor  = await DoctorSchema.findById(userId)

    if(patient){
        user = patient 
    }
    if(doctor){
        user = doctor 
    }
    if(!roles.includes(user.role)){

        return res.status(401).json({success: false, message: "You are not authorized to access this resource"})
}

    next();
}