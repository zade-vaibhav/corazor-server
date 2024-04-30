import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: false
    },
    phone:{
        type: Number,
        required: true,
        unique: false
    },

    message:[{
        message: {type: String, required: true},
        preferedServices:[{type: String, required: true}],
        createdAt: {type: Date, default: Date.now()}
    }],
    
},{timestamps:true})

const userModel = mongoose.model('user', userSchema);

export default userModel;