"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postInteractions = new mongoose_1.default.Schema({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    likeStatus: { type: String, required: true },
    commentText: { type: String, required: true },
    createdAt: { type: String, required: true },
}, {
    timestamps: true,
    collection: "postInteractions" //if you want to store both like and comments
});
exports.Post = mongoose_1.default.model('postInteractions', postInteractions);
