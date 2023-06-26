import mongoose from "mongoose";

const PostSchema=new mongoose.Schema({ 
    userId : {type:String,required:true},
    title :{type:String,required:true},
    description :{type:String,required:true},
    imgUrl :{type:String,required:true},
},{
    timestamps: true,
    collection:"post"
})

export const Post = mongoose.model('PostSchema',PostSchema)