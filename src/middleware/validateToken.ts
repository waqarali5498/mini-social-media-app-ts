import jwt from "jsonwebtoken"
const JWT_SECRET = "HelloWorld@321";
import { Request,Response,NextFunction } from "express"
import { UserPayload } from "../@types";


export const validateToken=async(req:Request,res:Response,next:NextFunction)=>{
    let authHeader=req.headers['authorization'] || req.headers['Authorization'];//header.authorization is in js
    const token=authHeader &&  typeof authHeader === 'string' && authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Token Not Found",success:false})
    }

    try {
        const decoded = jwt.verify(token,JWT_SECRET) as UserPayload;
        req.user = decoded;
        next();
      } catch (err) {
        return res.status(403).json({ message: 'User UnAuthorized! Cannot Access the Path' });
      }

}