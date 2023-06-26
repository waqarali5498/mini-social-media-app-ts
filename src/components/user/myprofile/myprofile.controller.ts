import {Request,Response , NextFunction} from 'express'
import * as service from "./myprofile.service";

export const getProfile = async (req: Request,res: Response,next: NextFunction) => {
  try {
    console.log(req.user);
    const getProfileFromDb = await service.getProfile();
    res.status(200).json({message:getProfileFromDb});
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = async (req: Request,res: Response,next: NextFunction) => {
  try {
    const { id } = req.params;
    const updateProfileinDb = await service.updateProfile(id,req.body);
    res.status(200).json({message:updateProfileinDb});
  } catch (err) {
    console.log(err);
  }
};

export const getAllPost = async (req: Request,res: Response,next: NextFunction) => {
  try {
    const getAllPost = await service.getAllPost();
    res.status(200).json({message:getAllPost});
  } catch (err) {
    console.log(err);
  }
};

export const getPost = async (req: Request,res: Response,next: NextFunction) => {
  try {
    const { postId } = req.params;
    const getPost = await service.getPost(postId);
    res.status(200).json({message:getPost});
  } catch (err) {
    console.log(err);
  }
};