import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    authorId:{
        type: String, 
        required: true, 
        unique: true 
    },
    title:{
        type: String, 
        required: true, 
        unique: true 
    },
    content:{
        type:String,
        required:true,
    }
});

export const blogModel = mongoose.model("blogs", blogSchema);