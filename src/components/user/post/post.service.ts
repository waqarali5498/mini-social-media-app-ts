import { POST ,LIKE,COMMENT} from "../../../models";
import { PostType } from "../../../@types";
import {
  HttpException,
  badImplementationException,
  dataNotExistException,
  validationException,
} from "../../utils/apiErrorHandler";


export const addPost = async ({
  userId,
  title,
  description,
  imgUrl,
}: PostType) => {
  let error: Error | any, data;
  try {
    if (!userId || !title || !imgUrl) {
      throw new Error("Missing fields");
    }
    const newPost = await POST.create({
      userId,
      title,
      description,
      imgUrl,
    });

    data = {
      newPost: newPost,
      msg: "success",
    };
  } catch (err) {
    console.log(err);
    error = err;
  }

  if (error) {
    return Promise.reject(error);
  } else {
    return Promise.resolve(data);
  }
};


export const getPost = async (id:string) => {
  let error: Error  | undefined, session, data: any;
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

export const likePost=async(postId:string,userId:string)=>{
  let error: Error | HttpException | undefined, session,data:any;
try {
  const result={
    postId:postId,
    userId:userId,
    likeStatus:'liked',
    createdAt:new Date()
  }

  const like=new LIKE(result);
  like.save({ session });
  data = {
    message: "Liked Post",
    success: true,
    like: like,
  };

} catch (err) {
  error = err instanceof Error ? err : badImplementationException(err);
}

if (error) {
  return Promise.reject(error);
} else {
  return Promise.resolve(data);
}

}

export const commentPost=async(postId:string,userId:string,commentText:string)=>{
  let error :Error | HttpException | undefined, session,data:any;
  try {
    const result={
      postId:postId,
      userId:userId,
      commentText:commentText,
      createdAt:new Date()
    }
    const comment=new COMMENT(result);
    comment.save({session});
    data={
      message:"Comment Post",
      succes:true,
      comment:comment
    }
  } catch (err) {
    error:err instanceof Error? err :badImplementationException(err);
  }

  if(error){
    return Promise.reject(error);
  }else{
    return Promise.resolve(data)
  }

}