"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentPost = exports.likePost = exports.getPost = exports.addPost = void 0;
const models_1 = require("../../../models");
const apiErrorHandler_1 = require("../../utils/apiErrorHandler");
const addPost = ({ userId, title, description, imgUrl, }) => __awaiter(void 0, void 0, void 0, function* () {
    let error, data;
    try {
        if (!userId || !title || !imgUrl) {
            throw new Error("Missing fields");
        }
        const newPost = yield models_1.POST.create({
            userId,
            title,
            description,
            imgUrl,
        });
        data = {
            newPost: newPost,
            msg: "success",
        };
    }
    catch (err) {
        console.log(err);
        error = err;
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.addPost = addPost;
const getPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        console.log(id);
        const result = yield models_1.POST.findOne({ _id: id });
        console.log(result);
        data = {
            message: "Get Post By ID",
            success: true,
            result: result
        };
    }
    finally {
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.getPost = getPost;
const likePost = (postId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        const result = {
            postId: postId,
            userId: userId,
            likeStatus: 'liked',
            createdAt: new Date()
        };
        const like = new models_1.LIKE(result);
        like.save({ session });
        data = {
            message: "Liked Post",
            success: true,
            like: like,
        };
    }
    catch (err) {
        error = err instanceof Error ? err : (0, apiErrorHandler_1.badImplementationException)(err);
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.likePost = likePost;
const commentPost = (postId, userId, commentText) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        const result = {
            postId: postId,
            userId: userId,
            commentText: commentText,
            createdAt: new Date()
        };
        const comment = new models_1.COMMENT(result);
        comment.save({ session });
        data = {
            message: "Comment Post",
            succes: true,
            comment: comment
        };
    }
    catch (err) {
        error: err instanceof Error ? err : (0, apiErrorHandler_1.badImplementationException)(err);
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.commentPost = commentPost;
