import {Request,Response , NextFunction} from 'express'
import * as service from "./auth.service";

export const registerUser = async (req: Request,res: Response,next: NextFunction) => {
  try {
    console.log(req.body);
    const registerUser = await service.registerUser(req.body);
    res.status(200).json({message:registerUser});
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (req: Request,res: Response,next: NextFunction) => {
  try {
    console.log(req.body);
    const {email,password}=req.body;
    const loginUser = await service.loginUser(email,password);
    res.status(200).json({message:loginUser});
  } catch (err) {
    console.log(err);
  }
};

export const confirmEmail = async (req: Request,res: Response,next: NextFunction) => {
  try {
    console.log(req.body);
    const {email}=req.body;
    const confirmEmail = await service.confirmEmail(email);
    res.status(200).json({message:confirmEmail});
  } catch (err) {
    console.log(err);
  }
};

export const verifyTokenforAccount = async (req: Request,res: Response,next: NextFunction) => {
  try {
    console.log(req.body);
    const {token}=req.params;
    const verifyTokenforAccount = await service.verifyTokenforAccount(token);
    res.status(200).json({message:verifyTokenforAccount});
  } catch (err) {
    console.log(err);
  }
};


export const forgetPassword = async (req: Request,res: Response,next: NextFunction) => {
  try {
    const {email}=req.body;
    const forgetPassword = await service.forgetPassword(email);
    res.status(200).json({message:forgetPassword});
  } catch (err) {
    console.log(err);
  }
};

export const verifyToken = async (req: Request,res: Response,next: NextFunction) => {
  try {
    console.log(req.body);
    const {token}=req.params;
    const verifyToken = await service.verifyToken(token);
    res.status(200).json({message:verifyToken});
  } catch (err) {
    console.log(err);
  }
};

export const resetPassword = async (req: Request,res: Response,next: NextFunction) => {
  try {
    console.log(req.body);
    const token = req.params.token;
    const password = req.body.password;
    const confirmPassword = req.body['confirm-password'];
    const resetPassword = await service.resetPassword(token,password,confirmPassword);
    res.status(200).json({message:resetPassword});
  } catch (err) {
    console.log(err);
  }
};


