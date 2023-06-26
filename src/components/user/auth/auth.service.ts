import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_SECRET = "HelloWorld@321";
import { UserType } from "../../../@types";
import {
  HttpException,
  badImplementationException,
  dataNotExistException,
  validationException,
} from "../../utils/apiErrorHandler";
import { USER,RESET } from "../../../models/";
import nodemailer from 'nodemailer'
import crypto from 'crypto'

export const registerUser = async ({
  email,
  name,
  gender,
  phone,
  birthday,
  province,
  password,
}: UserType) => {
  let error: Error | HttpException | undefined, session, data: any;
  try {
    // Logger.info("Register User");
    session = await USER.startSession();
    session.startTransaction();

    console.log("token is checked");
    const hashedPassword = await bcrypt.hash(password, 10);
    let userData = {
      email: email,
      password: hashedPassword,
      name: name,
      gender: gender,
      phone: phone,
      birthday: birthday,
      province: province,
      verificationToken:" ",
      isVerified: false
    };
    const newUser = new USER(userData);
    newUser.save({ session });
    data = {
      message: "User has been registered",
      success: true,
      newUser: newUser,
    };
    await session.commitTransaction();
  } catch (err) {
    error = err instanceof Error ? err : badImplementationException(err);
    if (session) await session.abortTransaction();
  } finally {
    if (session) session.endSession();
  }
  if (error) {
    // Logger.error(error);
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};

export const loginUser = async (email: string, password: string) => {
  let error: Error | HttpException | undefined, session, data: any;
  try {
    console.log(`loginUser: email = ${email}, password = ${password}`);

    const user = await USER.findOne({ email: email });
    console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          name: user.name,
          id: user._id,
        },
        JWT_SECRET
      );

      data = {
        message: "User Login Suucessfully",
        success: true,
        token: token,
      };
    } else {
      data = {
        message: "Invalid email or password",
        success: false,
      };
    }
  } catch (err) {
    error = err instanceof Error ? err : badImplementationException(err);
  } finally {
  }
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};











export const confirmEmail = async (email:string) => {
  let error: Error | HttpException | undefined, data: any;
  try {
       crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err);
                 }
        const token=buffer.toString('hex');
        const result = USER.updateOne({ email: email }, { $set: { verificationToken: token } }, (error:any, result:any) => { 
            if (error) {
                console.log(error);
                }

            // Send an email to the user's email address with a link containing the generated token
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'waqarali5498@gmail.com',
              pass: 'oqaequzmstmpsdsa'
            }
          });


        const mailOptions = {
            from: 'waqarali5498@gmail.com',
            to: email,
            subject: 'Email Confirmation',
            text: `You are receiving this email because you (or someone else) has signup on our social app through email.\n\nPlease click on the following link, or paste this into your browser to complete the process and Confirm your email:\n\nhttp://${'localhost:3001/user/password'}/reset/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            }
            console.log('Verification Email sent: ' + info.response);
                })
                     }) 
                         })

        data = {
        message: "Verification Email Sent Succesfully",
        success:true,
        }
        }
        finally{

        }
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};



export const verifyTokenforAccount = async (token:string) => {
  let error: Error | HttpException | undefined, session, data: any;
  try {
        const result =await USER.findOne({token:token},(err:any,user:any)=>{
          if(err){
            console.log(err);
            
          }
          if (!user) {
            console.log('Invalid Verification token');
          }
        });

        if(result){
          USER.updateOne({ email: result.email }, { $set: { isVerified: true }, $unset: { token: '' } })
        
      }

          data = {
            message: "User Verified Succesfully",
            success:true,
          }
        }finally{

        }
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};

export const forgetPassword = async (email:string) => {
  let error: Error | HttpException | undefined, data: any;
  try {
       crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err);
                 }
        const token=buffer.toString('hex');
        const result = USER.updateOne({ email: email }, { $set: { token: token } }, (error:any, result:any) => { 
            if (error) {
                console.log(error);
                }

            // Send an email to the user's email address with a link containing the generated token
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'waqarali5498@gmail.com',
              pass: 'oqaequzmstmpsdsa'
            }
          });


        const mailOptions = {
            from: 'waqarali5498@gmail.com',
            to: email,
            subject: 'Password Reset Request',
            text: `You are receiving this email because you (or someone else) has requested a password reset for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process:\n\nhttp://${'localhost:3001/user/password'}/reset/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            }
            console.log('Email sent: ' + info.response);
                })
                     }) 
                         })

        data = {
        message: "Forget Password Email Sent Succesfully",
        success:true,
        }
        }
        finally{

        }
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};


export const verifyToken = async (token:string) => {
  let error: Error | HttpException | undefined, session, data: any;
  try {
        const result =await USER.findOne({token:token},(err:any,user:any)=>{
          if(err){
            console.log(err);
            
          }
          if (!user) {
            console.log('Invalid reset password token');
          }
        });

        if(result){
          USER.updateOne({ email: result.email }, {  $unset: { token: '' } })
      }
          data = {
            message: "User Verified Succesfully",
            success:true,
          }
        }finally{

        }
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};


export const resetPassword = async (token:string,password:string,confirmPassword:string) => {
  let error: Error | HttpException | undefined, session, data: any;
  try {
    if(password===confirmPassword){
      const result =await RESET.findOne({token:token},(err:any,user:any)=>{
        if(err){
          console.log(err);
        }
        if (!user) {
          console.log('Invalid reset password token');
        }
        return user;
      });

      const hashedPassword=bcrypt.hash(password,10);
      if(result){
          USER.updateOne({ email: result.email }, { $set: { password: hashedPassword }, $unset: { token: '' } })
        
      }
        data = {
          message: "Password Updated Succesfully",
          success:true,
        }
    }
        }finally{

        }
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};
