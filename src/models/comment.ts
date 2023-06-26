import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({ 
    postId : {type:String,required:true},
    userId :{type:String,required:true},
    likeStatus :{type:String,required:true},
    createdAt :{type:String,required:true},
},{
    timestamps: true,
    collection:"comment"//if you want to store both like and comments
})

export const comment = mongoose.model('commentSchema',commentSchema)