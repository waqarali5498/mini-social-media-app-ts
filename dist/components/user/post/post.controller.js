"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.addComment = exports.likePost = exports.getPost = exports.addPost = void 0;
const service = __importStar(require("./post.service"));
const addPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, title, description, imgUrl } = req.body;
    const post = yield service.addPost({ userId, title, description, imgUrl });
    res.send(post);
});
exports.addPost = addPost;
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId } = req.params;
    const post = yield service.getPost(postId);
    res.send(post);
});
exports.getPost = getPost;
const likePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.id;
    const userId = req.body.userId;
    const like = yield service.likePost(postId, userId);
    res.send(like);
});
exports.likePost = likePost;
const addComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.id;
    const userId = req.body.userId;
    const commentText = req.body.commentText;
    const comment = yield service.commentPost(postId, userId, commentText);
    res.send(comment);
});
exports.addComment = addComment;
