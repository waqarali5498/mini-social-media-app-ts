import mongoose from "mongoose";

const resetSchema=new mongoose.Schema({ 
    email :{type:String,required:true,unique:true},
    token:{type:String,required:true}
},{
    timestamps: true,
    collection:"reset"
})

export const reset = mongoose.model('resetSchema',resetSchema)


export default reset;