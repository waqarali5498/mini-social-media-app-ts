import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({ 
    email :{type:String,required:true,unique:true},
    name :{type:String,required:true,unique:true},
    gender:{type:String,required:true},
    phone:{type:String,required:true},
    birthday:{type:String,required:true},
    province:{type:String,required:true},
    password:{type:String,required:true},
    isVerified:{type:Boolean,required:true},
    verificationToken:{type:String,required:true}
},{
    timestamps: true,
    collection:"user"
})

export const User = mongoose.model('UserSchema',UserSchema)


export default User;