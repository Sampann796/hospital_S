import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
    const id = req.params.id;

    try{

        const updatedUser = await user.findByIdAndUpdate(id, {$set:req.body}, {new:true})

        res.status(200).json({success:true, message:'Successfully updated', data:updatedUser})

    }
    catch(err){

        res.status(500).json({success:false, message:'Failed to update user'})

    }
}
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try{

        await user.findByIdAndDelete(id)
        (id)

        res.status(200).json({success:true, message:'Successfully deleted'})

    }
    catch(err){

        res.status(500).json({success:false, message:'Failed to delete user'})

    }
}
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try{

        const users = await user.findById(id).select("-password")

        res
        .status(200)
        .json({success:true, message:'User Found', data:users})

    }
    catch(err){
        console.log(err);
        
        res.status(404).json({success:false, message:'No user found'})

    }
}

export const getAllUser = async (req, res) => {

    try{

        const {query} = req.query
        let doctors;

        if(query){
            doctors = await user.find({isApproved}).select("-password")
        }

        const users = await user.find({}).select("-password")

        res
        .status(200)
        .json({success:true, message:'Users found', users:users})

    }
    catch(err){

        res.status(404).json({success:false, message:'Not found'})

    }
}

export const getUserProfile = async (req, res) => {
    const userId = req.userId;

        try{
            const user = await User.findById(userId)

            if(!user){
                return res.status(404).json({success:false, message:'User not found'})
            }
            const{password, ...rest} = user._doc
            res.status(200).json({success:true, message:'User found', data:{...rest}})
        }
     catch(err){
        res.status(500).json({success:false, message:'Failed to fetch user profile'})
     }
    }


export const getMyAppointments = async (req, res) => {
    try{

        // Step -1 retrive appointments from booking for specific user 
        const booking = await Booking.find({user:req.userId})
        // Step -2 extract doctor ids from appointments bookings 
        const doctorIds = booking.map(el=> el.doctor.id)
        // Step -3 retrive doctors using doctor ids 
        const doctors = await Doctor.find({_id: {$in:doctorIds}}).select("-password");

        res.status(200).json({success:true, message:'Appointments found', data:doctors})

    } catch(err){
        res.status(500).json({success:false, message:'Failed to fetch Appointments'})
    }
}