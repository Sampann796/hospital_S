

import user from "../models/UserSchema.js";

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

        const users = await user.find({}).select("-password")

        res
        .status(200)
        .json({success:true, message:'Users found', users:users})

    }
    catch(err){

        res.status(404).json({success:false, message:'Not found'})

    }
}