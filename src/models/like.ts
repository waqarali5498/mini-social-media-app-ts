import mongoose from "mongoose";

const likeSchema=new mongoose.Schema({ 
    postId : {type:String,required:true},
    userId :{type:String,required:true},
    likeStatus :{type:String,required:true},
    createdAt :{type:String,required:true},
},{
    timestamps: true,
    collection:"like"//if you want to store both like and comments
})

export const like = mongoose.model('likeSchema',likeSchema)