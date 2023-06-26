import  {USER,POST}  from "../../../models/";
import {UserType} from "../../../@types"

import { HttpException ,badImplementationException, dataNotExistException,validationException} from "../../utils/apiErrorHandler";


export const getProfile = async ( ) => {
  let error: Error | HttpException | undefined, session, data: any;
  try {
        const cursor =await USER.find({});
          data = {
            message: cursor,
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


export const updateProfile = async (id:string,{name,email,gender,phone,birthday,province,password}:UserType) => {
  let error: Error | HttpException | undefined, session, data: any;
  try {
        console.log(id,name)
        const result =await USER.updateOne({_id:id},{
          $set:{
            name:name,
            email:email,
            gender:gender,
            phone:phone,
            birthday:birthday,
            province:province,
            password:password
          }
        });

          data = {
            message: "Updated Succesfully",
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





export const getAllPost = async () => {
  let error: Error | HttpException | undefined, session, data: any;
  try {
        const result =await POST.find({});

          data = {
            message: "Updated Succesfully",
            success:true,
            result:result
          }
        }finally{

        }
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};





export const getPost = async (id:string) => {
  let error: Error | HttpException | undefined, session, data: any;
  try {
        console.log(id)
        const result =await POST.findOne({_id:id});
        console.log(result);
        
          data = {
            message: "Get Post By ID",
            success:true,
            result:result
          }
        }finally{

        }
  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};




