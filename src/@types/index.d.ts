//Type For User Registeration
export type UserType={
    email:string,
    name:string,
    gender:string,
    phone:string,
    birthday:string,
    province:string,
    password:string,
}



// Type of Post in App
export type PostType={
    userId:string,
    title:string,
    description :string,
    imgUrl:string
}

// Interface of incoming user payload from JWT
export interface UserPayload {
    name: string;
    id: string;
  }
  
  declare global {
    namespace Express {
      interface Request {
        user?: UserPayload;
      }
    }
  }