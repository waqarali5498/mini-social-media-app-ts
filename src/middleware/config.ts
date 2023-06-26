import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
// require('dotenv').config()
import { connectMongo } from "./mongo";
import {swagger} from './Swagger.config';


export const config = async (app : express.Application) => {
    console.log("Function Hits")
    app.use(express.static(__dirname+'../../static/index.html'));
    app.use(express.json());
    app.use(cors())
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(bodyParser.json());
    
    swagger(app);
    await connectMongo();

}

