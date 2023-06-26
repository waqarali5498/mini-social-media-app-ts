import { Request, Response, NextFunction } from "express";
import * as service from "./post.service";
import { PostType } from "../../../@types";

export const addPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, title, description, imgUrl }: PostType = req.body;
  const post = await service.addPost({ userId, title, description, imgUrl });
  res.send(post);
};

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {postId } = req.params;
  const post = await service.getPost(postId);
  res.send(post);
};

export const likePost= async(
  req:Request,
  res:Response,
  next:NextFunction
)=>{
const postId=req.params.id;
const userId=req.body.userId;
const like =await service.likePost(postId,userId)
res.send(like);
}

export const addComment= async(
  req:Request,
  res:Response,
  next:NextFunction
)=>{
const postId=req.params.id;
const userId=req.body.userId;
const commentText=req.body.commentText;
const comment =await service.commentPost(postId,userId,commentText)
res.send(comment);
}
