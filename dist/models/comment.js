"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commentSchema = new mongoose_1.default.Schema({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    likeStatus: { type: String, required: true },
    createdAt: { type: String, required: true },
}, {
    timestamps: true,
    collection: "comment" //if you want to store both like and comments
});
exports.comment = mongoose_1.default.model('commentSchema', commentSchema);
